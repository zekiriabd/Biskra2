unit UserController;

interface

uses
  System.SysUtils,System.Classes,System.JSON,System.Generics.Collections,

  EMS.Services,EMS.ResourceAPI,EMS.ResourceTypes,
  rest.json,

  UserDto,UserServiceImpl;

type
  [ResourceName('api')]
  {$METHODINFO ON}
  TUserControllerResource = class
  published

    [ResourceSuffix('/user/GetUsers')]
    procedure GetUsers(const AContext: TEndpointContext; const ARequest: TEndpointRequest; const AResponse: TEndpointResponse);

    private
    public
  end;
  {$METHODINFO OFF}

implementation

procedure TUserControllerResource.GetUsers(const AContext: TEndpointContext; const ARequest: TEndpointRequest; const AResponse: TEndpointResponse);
var
  users : TList<TUserDto>;
  userServiceImpl: TUserServiceImpl;
begin
  userServiceImpl:= TUserServiceImpl.Create;
  users := userServiceImpl.GetUsers();
  AResponse.Body.SetValue( TJSON.ObjectToJsonObject(users), True);

end;


procedure Register;
begin
  RegisterResource(TypeInfo(TUserControllerResource));
end;


initialization
  Register;
end.


