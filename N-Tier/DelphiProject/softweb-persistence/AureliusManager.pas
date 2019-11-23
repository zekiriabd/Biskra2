unit AureliusManager;

interface
uses
  Data.DB,
  {FireDac}
  FireDAC.Comp.DataSet,
  FireDAC.Comp.Client,
  FireDAC.Stan.Intf,
  FireDAC.Stan.Option,
  FireDAC.Stan.Param,
  FireDAC.Stan.Error,
  FireDAC.Stan.Def,
  FireDAC.Stan.Pool,
  FireDAC.Stan.Async,
  FireDAC.Phys.Intf,
  FireDAC.Phys.MySQLDef,
  FireDAC.Phys.MySQL,
  FireDAC.Phys,
  FireDAC.DApt.Intf,
  FireDAC.DApt,
  FireDAC.DatS,
  FireDAC.UI.Intf,

//  FireDAC.ConsoleUI.Wait,
//  FireDAC.Comp.UI,

  {System}
  System.Generics.Collections,
  System.SysUtils,

  {Aurelius}
  Aurelius.Drivers.Interfaces,
  Aurelius.Engine.DatabaseManager,
  Aurelius.Engine.ObjectManager,
  Aurelius.Criteria.Linq,
  Aurelius.Criteria.Projections,
  Aurelius.Drivers.FireDac,
  Aurelius.Schema.MySQL,
  Aurelius.Comp.Connection,
  Aurelius.Sql.Mysql;

type
TAureliusManager = class
    class function GetTmsManager():TObjectManager;static;
end;

implementation

function GetCoonection():TFDConnection;
begin

    Result := TFDConnection.Create(nil);
    Result.Params.DriverID := 'MySQL';
    Result.Params.Add('Server=127.0.0.1');
    Result.Params.Database := 'usersmanagement';
    Result.Params.UserName := 'root';
    Result.Params.Password := '';
    Result.LoginPrompt := False;
    Result.Connected:=True;
end;

class function TAureliusManager.GetTmsManager(): TObjectManager;
var
  tmsConnection : IDBConnection;
  FDConnection:TFDConnection;
  AureliusConnection1: TAureliusConnection;
  //FDGUIxWaitCursor : TFDGUIxWaitCursor;
begin
    FDConnection := TFDConnection.Create(nil);
    AureliusConnection1:= TAureliusConnection.Create(nil);
    //FDGUIxWaitCursor := TFDGUIxWaitCursor.Create(nil);
    try
    FDConnection.Params.DriverID := 'MySQL';
    FDConnection.Params.Add('Server=127.0.0.1');
    FDConnection.Params.Database := 'usersmanagement';
    FDConnection.Params.UserName := 'root';
    FDConnection.Params.Password := '';

    AureliusConnection1.AdaptedConnection := FDConnection;
    AureliusConnection1.AdapterName:='FireDac';
    AureliusConnection1.SQLDialect:='MySQL';

    tmsConnection := AureliusConnection1.CreateConnection;
    TDatabaseManager.Update(tmsConnection);

    //FDGUIxWaitCursor.Provider := 'Console';

    Result := TObjectManager.Create(tmsConnection);
    finally
    //FDGUIxWaitCursor.Free;
    FDConnection.Free;
    AureliusConnection1.Free;
    end;
   
end;

end.


