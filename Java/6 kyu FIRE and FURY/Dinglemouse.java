// The President's phone is broken

// He is not very happy.

// The only letters still working are uppercase E, F, I, R, U, Y.

// An angry tweet is sent to the department responsible for presidential phone maintenance.
// Kata Task

// Decipher the tweet by looking for words with known meanings.

//    FIRE = "You are fired!"
//    FURY = "I am furious."

// If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."
// Notes

//    The tweet reads left-to-right.
//    Any letters not spelling words FIRE or FURY are just ignored
//    If multiple of the same words are found in a row then plural rules apply -
//    FIRE x 1 = "You are fired!"
//    FIRE x 2 = "You and you are fired!"
//    FIRE x 3 = "You and you and you are fired!"
//    etc...
//    FURY x 1 = "I am furious."
//    FURY x 2 = "I am really furious."
//    FURY x 3 = "I am really really furious."
//    etc...

// Examples

//    ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
//    ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
//    ex3. FYRYFIRUFIRUFURE = "Fake tweet."

// Solution

public class Dinglemouse {

  public static String fireAndFury(final String tweet) {
    if (!tweet.matches("[EFIRUY]*")) return "Fake tweet.";

    String[] words = tweet.split("(?=(FIRE|FURY))");
    StringBuilder result = new StringBuilder();

    int i = 0;
    boolean foundValid = false;

    while (i < words.length) {
      if (words[i].startsWith("FIRE")) {
        int count = 0;
        while (i < words.length && words[i].startsWith("FIRE")) {
          count++;
          i++;
        }
        foundValid = true;
        result.append("You");
        for (int j = 1; j < count; j++) result.append(" and you");
        result.append(" are fired!");
        result.append(" ");
      } else if (words[i].startsWith("FURY")) {
        int count = 0;
        while (i < words.length && words[i].startsWith("FURY")) {
          count++;
          i++;
        }
        foundValid = true;
        result.append("I am");
        for (int j = 1; j < count; j++) result.append(" really");
        result.append(" furious.");
        result.append(" ");
      } else {
        i++;
      }
    }

    return foundValid ? result.toString().trim() : "Fake tweet.";
  }

}

