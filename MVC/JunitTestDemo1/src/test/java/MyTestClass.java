import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

public class MyTestClass {

    MyClass myobj = null;

    @BeforeEach
    public void initObject(){
       myobj = new MyClass();
    }

    @Test
    public void multiplTest(){

        assertTrue(myobj.multipl(10 , 2) == 20);
    }

   /* @Test
    public void Test1(){
        assertTrue(10 * 2 == 30);
    }

   @ValueSource(ints = {8})
    @ParameterizedTest
    public void Test2(int mynb){
        assertEquals( mynb,"zekiri".length());
    }


    @ValueSource(ints = { 5, 10, 15 , 20 })
    @ParameterizedTest
    public void Test3(int mynb){
       assertTrue(mynb * 2 == 20);
    }
    */

}
