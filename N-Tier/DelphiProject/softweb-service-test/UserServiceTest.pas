unit UserServiceTest;

interface
uses
  DUnitX.TestFramework,
  System.Generics.Collections,
  UserServiceImpl,
  UserDto,
  UserDao,
  User,
  UserService,
  FireDAC.ConsoleUI.Wait,
  FireDAC.Comp.UI
  ,
  Delphi.Mocks;

type
  [TestFixture]
  TUserServiceTest = class(TObject)
  public

     Constructor Create; overload;
     Destructor  Destroy; override;

    [Test]
    [TestCase('TestA','1,2')]
    [TestCase('TestB','4,4')]
    procedure multipleTest(const AValue1 : Integer;const AValue2 : Integer);

   [Test]
    procedure GetUsersTest();

   [Test]
    procedure GetUsersMockTest();

  private
    FDGUIxWaitCursor : TFDGUIxWaitCursor;

  end;

implementation

constructor TUserServiceTest.Create;
begin
  FDGUIxWaitCursor := TFDGUIxWaitCursor.Create(nil);
  FDGUIxWaitCursor.Provider := 'Console';

end;

destructor TUserServiceTest.Destroy;
begin
  if  FDGUIxWaitCursor <> nil  then  FDGUIxWaitCursor.Free;
  inherited;
end;

procedure TUserServiceTest.GetUsersMockTest;
var
  mockContext : TMock<IUserDao>;
  data : TList<TUser>;
  _result : TList<TUserDto>;
  userService : TUserServiceImpl;
begin

    data := TList<TUser>.Create();
    data.Add(Tuser.Create(1,'Zekiri','Abdelali'));

    mockContext := TMock<IUserDao>.Create();
    mockContext.Setup.WillReturn(data).When.Users;

    userService := TUserServiceImpl.Create(mockContext.Instance);

    _result := userService.GetUsers();

    Assert.IsTrue(_result.Count = 1);
    Assert.IsTrue(_result.First.FirstName = 'Zekiri');


end;

procedure TUserServiceTest.GetUsersTest;
var _result : TList<TUserDto>;
 userService : TUserServiceImpl;
begin
    userService := TUserServiceImpl.Create();
    _result := userService.GetUsers();
    Assert.IsTrue(_result.Count = 6);
end;

procedure TUserServiceTest.multipleTest(const AValue1 : Integer;const AValue2 : Integer);
var
_result : Integer;
 userService : TUserServiceImpl;
begin
   userService := TUserServiceImpl.Create();
   _result := userService.multipl(AValue1,AValue2);
   Assert.IsTrue(_result = 16);
end;

initialization
  TDUnitX.RegisterTestFixture(TUserServiceTest);
end.
