// Define a function that removes duplicates from an array
// of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// My solution


import java.util.ArrayList;

public class Solution {
  public static int[] distinct(int[] array) {
    ArrayList<Integer> newlist = new ArrayList<>();
    
    for (int i = 0; i < array.length; i++) {
      if (!newlist.contains(array[i])) {
        newlist.add(array[i]);
      }
    }

    int[] result = new int[newlist.size()];
    for (int i = 0; i < newlist.size(); i++) {
      result[i] = newlist.get(i);
    }

    return result;
  }
}

