/*
Create a method named "rotate" that returns a given array with the elements inside the array rotated n spaces.

If n is greater than 0 it should rotate the array to the right. 
If n is less than 0 it should rotate the array to the left.
If n is 0, then it should return the array unchanged.

Example:

with array [1, 2, 3, 4, 5]

n = 1      =>    [5, 1, 2, 3, 4]
n = 2      =>    [4, 5, 1, 2, 3]
n = 3      =>    [3, 4, 5, 1, 2]
n = 4      =>    [2, 3, 4, 5, 1]
n = 5      =>    [1, 2, 3, 4, 5]
n = 0      =>    [1, 2, 3, 4, 5]
n = -1     =>    [2, 3, 4, 5, 1]
n = -2     =>    [3, 4, 5, 1, 2]
n = -3     =>    [4, 5, 1, 2, 3]
n = -4     =>    [5, 1, 2, 3, 4]
n = -5     =>    [1, 2, 3, 4, 5]

The rotation shouldn't be limited by the indices available in the array.
Meaning that if we exceed the indices of the array it keeps rotating.

Example:

with array [1, 2, 3, 4, 5]

n = 7        =>    [4, 5, 1, 2, 3]
n = 11       =>    [5, 1, 2, 3, 4]
n = 12478    =>    [3, 4, 5, 1, 2]
*/

// Solution

public class Rotator {

public static Object[] rotate(Object[] data, int n) {
    int len = data.length;
    if (len == 0) return data;
    n = ((n % len) + len) % len;
    Object[] result = new Object[len];
    for (int i = 0; i < len; i++) {
        result[(i + n) % len] = data[i];
    }
    return result;
}
