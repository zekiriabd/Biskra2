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
     Constructor Create; overload;   // This constructor uses defaults


    {[Test]
    [TestCase('TestA','1,2')]
    [TestCase('TestB','4,4')]
    procedure multipleTest(const AValue1 : Integer;const AValue2 : Integer);
    }

  {  [Test]
    procedure GetUsersTest();
         }

    [Test]
    procedure GetUsersMockTest();


  private
  end;

implementation

constructor TUserServiceTest.Create;
begin
end;

procedure TUserServiceTest.GetUsersMockTest;
var
 iResult : TList<TUserDto>;
 data : TList<TUser>;
 FDGUIxWaitCursor : TFDGUIxWaitCursor;
 userService : TUserServiceImpl;
 mockContext : TMock<TUserDao>;

begin
  FDGUIxWaitCursor := TFDGUIxWaitCursor.Create(nil);
  FDGUIxWaitCursor.Provider := 'Console';

  try
    data := TList<TUser>.Create(); data.Add(Tuser.Create(1,'Zekiri','Abdelali'));
    mockContext := TMock<TUserDao>.Create();
    mockContext.Setup.WillReturn(data).When.Users;

    userService := TUserServiceImpl.Create(mockContext.Instance);

    iResult := userService.GetUsers();

    Assert.IsTrue(iResult.Count = 1);
  finally
    FDGUIxWaitCursor.Free;
  end;
end;

     {
procedure TUserServiceTest.GetUsersTest;
var
  iResult : TList<TUserDto>;
  FDGUIxWaitCursor : TFDGUIxWaitCursor;
begin
  FDGUIxWaitCursor := TFDGUIxWaitCursor.Create(nil);
  FDGUIxWaitCursor.Provider := 'Console';

  try

    iResult := userServiceImpl.GetUsers();
    Assert.IsTrue(iResult.Count = 6);

  finally
    FDGUIxWaitCursor.Free;
  end;
end;

procedure TUserServiceTest.multipleTest(const AValue1 : Integer;const AValue2 : Integer);
begin
  var iResult := userServiceImpl.multipl(AValue1,AValue2);
  Assert.IsTrue(iResult = 16);
end;}

initialization
  TDUnitX.RegisterTestFixture(TUserServiceTest);
end.
