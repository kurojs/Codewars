/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
Example(Input1, Input2 --> Output)

[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

Arrays
Algorithms
*/

// Solution

import java.util.Arrays;

public class EvenNumbers {
    public static int[] divisibleBy(int[] numbers, int divisor) {
        int[] result = new int[numbers.length];
        int index = 0;

        for (int number : numbers) {
            if (number % divisor == 0) {
                result[index++] = number;
            }
        }

        return Arrays.copyOf(result, index);
    }
}

