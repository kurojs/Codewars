/*
Area of an arrow

An arrow is formed in a rectangle with sides a and b by joining 
the bottom corners to the midpoint of the top edge and the centre of the rectangle.

arrow

a and b are integers and > 0

Write a function which returns the area of the arrow.
*/

// Solution

public class Solution {
    public static double arrowArea(int a, int b) {
        return (a * b) / 4.0;
    }
}
