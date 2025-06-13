/*
Implement String#to_cents, which should parse prices expressed as $1.23 and return number of cents,
or in case of bad format return nil.

In this kata, for a price to be considered valid, it must start with a dollar sign ($), 
followed immediately by a decimal number with exactly 2 decimal digits.
*/

// Solution

public class CentParser {

  public static Integer toCents(String price) {
    if (price == null || !price.matches("^\\$\\d+\\.\\d{2}$")) {
      return null;
    }

    String numericPart = price.substring(1).replace(".", "");

    try {
      return Integer.parseInt(numericPart);
    } catch (NumberFormatException e) {
      return null;
    }
  }
}

