// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My solution
class Solution {
    static String removeExclamationMarks(String s) {
      return s.replaceAll("!", "");
    }
}