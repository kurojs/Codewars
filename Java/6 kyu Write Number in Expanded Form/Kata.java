// Write Number in Expanded Form
//
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//        12 --> "10 + 2"
//        45 --> "40 + 5"
//        70304 --> "70000 + 300 + 4"
//
// NOTE: All numbers will be whole numbers greater than 0.
//
// If you liked this kata, check out part 2!!

// My solution

public class Kata {
    public static String expandedForm(int num) {
        String numString = String.valueOf(num);
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < numString.length(); i++) {
            char digitChar = numString.charAt(i);
            int digit = Character.getNumericValue(digitChar);

            if (digit != 0) {
                int zeros = numString.length() - i - 1;
                int value = (int) (digit * Math.pow(10, zeros));

                if (result.length() > 0) {
                    result.append(" + ");
                }

                result.append(value);
            }
        }

        return result.toString();
    }
}
