/*
 Your friend has a list of k numbers: [a1, a2, a3, ... ak].

 He is allowed to do an operation which consists of three steps:

    select two numbers: ai and aj (ai % 2 = 0)
    replace ai with ai / 2
    replace aj with aj * 2

 Help him to find the maximum sum of list elements that is possible to achieve by using this operation (possibly multiple times).
 Return this sum modulo 1_000_000_007, because it can be quite big.
 Input

 List of k elements: [a1, a2, a3, ..., ak]; k < 10**4
 All numbers are positive and smaller than 10**9
 Output

 Maximum sum after some operations (modulo 1_000_000_007)
*/

// My solution

import java.util.ArrayList;
import java.util.Collections;

public class Kata {

    static final long MOD = 1_000_000_007L;

    public static int divideAndMultipy(long[] numbers) {
        long totalPowerOfTwo = 0;
        int maxIndex = 0; 

        for (int i = 0; i < numbers.length; i++) {
            long currentNum = numbers[i];
            while (currentNum > 0 && currentNum % 2 == 0) {
                currentNum /= 2;
                totalPowerOfTwo++;
            }
            numbers[i] = currentNum;
        }

        if (numbers.length > 0) {
            for (int i = 1; i < numbers.length; i++) {
                if (numbers[i] > numbers[maxIndex]) {
                    maxIndex = i;
                }
            }
        } else {
             return 0;
        }

        long powerOfTwoFactor = 1L;
        for (int k = 0; k < totalPowerOfTwo; k++) {
            powerOfTwoFactor = (powerOfTwoFactor * 2) % MOD;
        }

        long finalSum = 0;

        for (int i = 0; i < numbers.length; i++) {
            finalSum = (finalSum + numbers[i]) % MOD;
        }

        finalSum = (finalSum - numbers[maxIndex] + MOD) % MOD;
        
        long transformedMaxNum = (numbers[maxIndex] * powerOfTwoFactor) % MOD;

        finalSum = (finalSum + transformedMaxNum) % MOD;

        return (int) finalSum;
    }
}
