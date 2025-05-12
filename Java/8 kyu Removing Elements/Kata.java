// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.
// Example:
//
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
// None of the arrays will be empty, so you don't have to worry about that!
//

// My solution


import java.util.List;
import java.util.ArrayList;

public class Kata {
  
  public static Object[] removeEveryOther(Object[] arr) {
    List<Object> result = new ArrayList<>();

    for (int i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        result.add(arr[i]);
      }
    }

    return result.toArray(); 
  }
}

