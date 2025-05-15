/* This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// My solution


import java.util.List;
import java.util.ArrayList;

public class Accumul {
    public static String accum(String s) {
        List<String> result = new ArrayList<>();

        for (int i = 0; i < s.length(); i++) {
            char letra = s.charAt(i);
            String upper = String.valueOf(Character.toUpperCase(letra));
            String lower = String.valueOf(Character.toLowerCase(letra)).repeat(i);
            result.add(upper + lower);
        }

        return String.join("-", result);
    }
}

}
