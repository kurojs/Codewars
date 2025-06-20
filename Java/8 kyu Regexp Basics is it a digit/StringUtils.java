/*
Implement String#digit? (in Java StringUtils.isDigit(String)), 
which should return true if given object is a single digit (0-9), false otherwise.
*/

// Solution

public class StringUtils {
  
  public static boolean isDigit(String s) {
    return s != null && s.length() == 1 && s.charAt(0) >= '0' && s.charAt(0) <= '9';
  }
}
