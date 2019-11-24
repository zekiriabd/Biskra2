unit UserDao;

interface
uses
User,
Aurelius.Engine.ObjectManager,
AureliusManager,
System.Generics.Collections;
type

   {$M+}
   IUserDao =  interface(IInterface)
      function Users: TList<TUser>;
   end;
   {$M-}

  TUserDao = class (TInterfacedObject, IUserDao)
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
    Manager := TAureliusManager.GetTmsManager();
  try
    Result := Manager.Find<TUser>().List();
   finally
    Manager.Free;
   end;
end;

end.
