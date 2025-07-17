/*
The method is supposed to remove even numbers from the list and 
return a list that contains the odd numbers.

However, there is a bug in the method that needs to be resolved.
*/

// Solution

import java.util.List;
import java.util.Iterator;

public class Kata13December {
    public static List<Integer> filterOddNumber(List<Integer> listOfNumbers) {
        Iterator<Integer> iterator = listOfNumbers.iterator();
        while (iterator.hasNext()) {
            if (iterator.next() % 2 == 0) {
                iterator.remove();
            }
        }
        return listOfNumbers;
    }
}

