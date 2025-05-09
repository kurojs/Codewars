// We need to sum big numbers and we require your help.
//
// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Example
//
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
//
// Notes
//
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives
//

// My solution
public class Kata {
    public static String add(String a, String b) {

        StringBuilder result = new StringBuilder();
        int carry = 0;
        int maxLength = Math.max(a.length(), b.length());

        for (int i = 0; i < maxLength; i++) {
            int digitA = (i < a.length()) ? a.charAt(a.length() - 1 - i) - '0' : 0;
            int digitB = (i < b.length()) ? b.charAt(b.length() - 1 - i) - '0' : 0;

            int sum = digitA + digitB + carry;
            carry = sum / 10;
            result.append(sum % 10);
        }

        if (carry > 0) {
            result.append(carry);
        }

        return result.reverse().toString();
    }
}