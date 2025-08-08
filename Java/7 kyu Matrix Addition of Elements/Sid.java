/*
Matrix Addition of Elements

As the name suggests you just have to add all the elements of the matrix 
(2-dimensional array) and return the sum.

    Matrices can be of any size, not necessarily square.
    Matrices can have negative elements as well.

Constraints

1 <= rows, columns < 20 -100 <= elements <= 100
Example

[[1,0], [0,1]] // --> should return 2.
[[7,9], [3,6]] // --> should return 25.
*/

// Solution

public class Sid {
    public static int sumOfElements(int matrix[][]) {
      int sum = 0;

      for (int i = 0; i < matrix.length; i++) {
          for (int j = 0; j < matrix[i].length; j++) {
              sum += matrix[i][j];
          }
      }
    return sum;
    }    
}
