unit User;

interface
uses
Aurelius.Mapping.Attributes;

type
  [Entity, Automapping]
  [Table('user')]
  TUser = class
  private
    [Column('Id')]
    FId: integer;
    [Column('FirstName')]
    FLastName: string;
    [Column('LastName')]
    FFirstName: string;
  public
    Property Id: integer read FId write FId;
    Property FirstName : string read FFirstName write FFirstName;
    Property LastName : string read FLastName write FLastName;
    Constructor Create; overload;
    Constructor Create(id : integer; firstName:string; lastName: string); overload;

  end;

implementation

Constructor TUser.Create(); begin end;

Constructor TUser.Create(id : integer; firstName:string; lastName: string);
begin
    self.Id     := id;
    self.FirstName := firstName;
    self.LastName   := lastName;
end;


end.
