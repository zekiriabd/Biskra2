
import org.junit.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.Assert.*;

public class MyClassTest {

    @ValueSource(ints = {10,20,5})
    @ParameterizedTest
    public void Test3(int myparm){
        assertEquals(20,myparm);
    }


}
