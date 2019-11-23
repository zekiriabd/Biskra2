import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class testdemo {
    @Test
    public void Test1(){
        // fail("coucou");
        assertTrue(10 * 20 == 20);
    }
    @ValueSource(ints = {6})
    @ParameterizedTest
    public void Test2(int mynb){
        assertEquals( mynb,"zekiri".length());
    }

}

