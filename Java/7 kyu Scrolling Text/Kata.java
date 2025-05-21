/* 
Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations
of the given string, in uppercase.

Example

scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]

Good luck!
*/

// My solution

public class Kata {
    public static String[] scrollingText(String text) {
        String uppercase= text.toUpperCase();
        String[] result = new String[uppercase.length()];
      for (int i = 0; i < text.length(); i++){
        result[i] = uppercase.substring(i) + uppercase.substring(0, i);
      } return result;

    }
}
