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
  FireDAC.Comp.UI,
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
    userService : TUserServiceImpl;
  end;

implementation

constructor TUserServiceTest.Create;
begin
  FDGUIxWaitCursor := TFDGUIxWaitCursor.Create(nil);
  FDGUIxWaitCursor.Provider := 'Console';
  userService := TUserServiceImpl.Create();
end;

destructor TUserServiceTest.Destroy;
begin
  if  FDGUIxWaitCursor <> nil  then  FDGUIxWaitCursor.Free;
  inherited;
end;

procedure TUserServiceTest.GetUsersMockTest;
begin
  try
    var data := TList<TUser>.Create();
    data.Add(Tuser.Create(1,'Zekiri','Abdelali'));

    var mockContext := TMock<IUserDao>.Create();
    mockContext.Setup.WillReturn(data).When.Users;

    userService := TUserServiceImpl.Create(mockContext.Instance);

    var _result := userService.GetUsers();

    Assert.IsTrue(_result.Count = 1);
    Assert.IsTrue(_result.First.FirstName = 'Zekiri');

  finally
    FDGUIxWaitCursor.Free;
  end;
end;

procedure TUserServiceTest.GetUsersTest;
begin
    var _result := userService.GetUsers();
    Assert.IsTrue(_result.Count = 6);
end;

procedure TUserServiceTest.multipleTest(const AValue1 : Integer;const AValue2 : Integer);
begin
  var _result := userService.multipl(AValue1,AValue2);
  Assert.IsTrue(_result = 16);
end;

initialization
  TDUnitX.RegisterTestFixture(TUserServiceTest);
end.
