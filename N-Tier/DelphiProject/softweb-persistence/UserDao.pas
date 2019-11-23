unit UserDao;

interface
uses
User,
Aurelius.Engine.ObjectManager,
AureliusManager,
System.Generics.Collections;


type
  [Entity, Automapping]
  TUserDao = class
  private

  public
    Constructor Create; overload;
    function Users: TList<TUser>;
  end;

implementation

Constructor TUserDao.Create(); begin end;

function TUserDao.Users: TList<TUser>;
var Manager : TObjectManager;
begin
   // Result:= TList<TUserDto>.Create();
    Manager := TAureliusManager.GetTmsManager();
  try
    Result := Manager.Find<TUser>().List();
   finally
    Manager.Free;
   end;
end;

end.
