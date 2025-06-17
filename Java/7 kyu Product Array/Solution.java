/*
Given an array/list [] of integers , 
Construct a product array Of same size Such That prod[i] 
is equal to The Product of all the elements of Arr[] except Arr[i]. 
*/

// Solution

public class Solution
{
    public static long[] productArray(int[] numbers)
    {
        int n = numbers.length;
        long[] result = new long[n];

        for (int i = 0; i < n; i++) {
            long product = 1;
            for (int j = 0; j < n; j++) {
                if (i != j) {
                    product *= numbers[j];
                }
            }
            result[i] = product;
        }

        return result;
    }
}
