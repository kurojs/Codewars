/*
You will be given a list of strings. You must sort it alphabetically 
(case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

// My solution


import java.util.Arrays;

public class SortAndStar {

  public static String twoSort(String[] s) {
    Arrays.sort(s); 
    String first = s[0]; 
    
    StringBuilder result = new StringBuilder();
    for (int i = 0; i < first.length(); i++) {
      result.append(first.charAt(i));
      if (i != first.length() - 1) {
        result.append("***");
      }
    }
    return result.toString();
  }
}

