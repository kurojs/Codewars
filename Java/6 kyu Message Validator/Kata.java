/*
In this kata, you have an input string and you should check whether it is a valid message. 
To decide that, you need to split the string by the numbers, and then compare the numbers with 
the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the
function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2;
as the numbers and the character counts match, the result is true.

Notes:

    Messages are composed of only letters and digits
    Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
    Every number must match the number of character in the following substring, 
    otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
    If the message is an empty string, you should return true
*/

// Solution

public class Kata {
  
  public static boolean isAValidMessage(String message) {
    if (message.isEmpty()) {
      return true;
    }

    int i = 0;
    while (i < message.length()) {
      // Leer el número
      StringBuilder number = new StringBuilder();
      while (i < message.length() && Character.isDigit(message.charAt(i))) {
        number.append(message.charAt(i));
        i++;
      }

      if (number.length() == 0) {
        return false; 
      }

      int num = Integer.parseInt(number.toString());

      if (i + num > message.length()) {
        return false; 
      }

      String word = message.substring(i, i + num);
      if (word.length() != num) {
        return false; 
      }

      i += num;
    }

    return true;
  }
}

