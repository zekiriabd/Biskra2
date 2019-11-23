
import org.junit.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;


import static org.junit.Assert.*;

public class JUnitTest1 {

    @Test
    public void Test1(){
        // fail("coucou");
        assertTrue(10 * 2 == 20);
    }

    @ValueSource(ints = {6})
    @ParameterizedTest
    public void Test2(int mynb){
       assertEquals( mynb,"zekiri".length());
    }

   /* @ValueSource(ints = { 5, 10, 15 , 20 })

    @ParameterizedTest
    public void Test2(int mynb){
       // fail("coucou");
       assertEquals( 20,"zekiri".length());
       assertTrue(mynb * 2 == 20);
    }*/
}
