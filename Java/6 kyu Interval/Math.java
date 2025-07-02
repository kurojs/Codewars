/*
Given an array of numbers and string which can be in form:

"[a,b]"
"(a,b]"
"[a,b)"
"(a,b)"


Interval

More about intervals.
Task

Given an array of numbers and string - interval.

Return array of numbers between interval. 
Output must be sorted array. If string/array is empty, return empty array.
*/ 

// Solution

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Math {
    public static int[] Interval(int[] arr, String str) {
        if (arr == null || arr.length == 0 || str == null || str.isEmpty()) return new int[0];

        str = str.replaceAll("\\s", "");
        boolean leftInclusive = str.startsWith("[");
        boolean rightInclusive = str.endsWith("]");
        String[] bounds = str.substring(1, str.length() - 1).split(",");
        int left = Integer.parseInt(bounds[0]);
        int right = Integer.parseInt(bounds[1]);

        List<Integer> result = new ArrayList<>();
        for (int num : arr) {
            if ((leftInclusive ? num >= left : num > left) &&
                (rightInclusive ? num <= right : num < right)) {
                result.add(num);
            }
        }

        return result.stream().sorted().mapToInt(i -> i).toArray();
    }
}

