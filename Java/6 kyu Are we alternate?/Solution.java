/*
Create a function that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.
Examples

"amazon" --> true
"apple" --> false
"banana" --> true

Note

    Arguments consist of only lowercase letters.
*/

// My solution

public class Solution {
    public static boolean isAlt(String word) {
        for (int i = 1; i < word.length(); i++) {
            char current = word.charAt(i);
            char previous = word.charAt(i - 1);

            boolean currIsVowel = isVowel(current);
            boolean prevIsVowel = isVowel(previous);

            if (currIsVowel == prevIsVowel) {
                return false;
            }
        }
        return true;
    }

    private static boolean isVowel(char c) {
        return "aeiou".indexOf(c) != -1;
    }
}

