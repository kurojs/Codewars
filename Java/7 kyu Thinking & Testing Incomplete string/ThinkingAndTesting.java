/*
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/

// Solution

public class ThinkingAndTesting {

  public static String testIncompleteString(String s) {
    StringBuilder builder = new StringBuilder((s.length() / 2) + 1);
    for (int i = 0; i < s.length(); i += 2) {
      builder.appendCodePoint(i != s.length() - 1 ? ((s.codePointAt(i) + s.codePointAt(i + 1)) / 2) : s.codePointAt(i));
    }
    return builder.toString();
  }
}
