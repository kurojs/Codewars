/*
Given that

f0 = '0'
f1 = '01'
f2 = '010' = f1 + f0
f3 = '01001' = f2 + f1

You will be given a number and your task is to return the nth fibonacci string. For example:

solve(2) = '010'
solve(3) = '01001'

More examples in test cases. Good luck!
*/

// Solution

public class Solution {
    public static String solve(int n) {
        if (n == 0) return "0";
        if (n == 1) return "01";

        String a = "0", b = "01";
        for (int i = 2; i <= n; i++) {
            String temp = b;
            b = b + a;
            a = temp;
        }
        return b;
    }
}
