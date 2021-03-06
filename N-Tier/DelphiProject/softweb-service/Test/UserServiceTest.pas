unit UserServiceTest;

interface

uses
  DUnitX.TestFramework;

type
  [TestFixture]
  TMyTestObject = class
  public
    // Sample Methods
    // Simple single Test
    [Test]
    procedure Test1;
    // Test with TestCase Attribute to supply parameters.
    [Test]
    [TestCase('TestA','1,2')]
    [TestCase('TestB','3,3')]
    procedure Test2(const AValue1 : Integer;const AValue2 : Integer);
  end;

implementation

procedure TMyTestObject.Test1;
begin

end;

procedure TMyTestObject.Test2(const AValue1 : Integer;const AValue2 : Integer);
begin
 Assert.IsTrue(AValue1 = AValue2);
end;

initialization
  TDUnitX.RegisterTestFixture(TMyTestObject);

end.
