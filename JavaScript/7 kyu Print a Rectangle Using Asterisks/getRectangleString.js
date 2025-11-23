/*
 Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).

For example, given width = 3 and height = 3:

***
* *
***

End each line of the string (including the last one) with a carriage return-line feed combination.

Note: You may assume that width and height will always be greater than zero.
*/

// Solution

function getRectangleString(width, height) {
  return Array.from({ length: height }, (_, row) => {
    if (row === 0 || row === height - 1) {
      return "*".repeat(width);
    } else {
      return "*" + " ".repeat(width - 2) + "*";
    }
  })
    .map((line) => line + "\r\n")
    .join("");
}
