// You are required to create a simple calculator that returns the result of addition, subtraction, 
// multiplication or division of two numbers.
// 
// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.
// 
// If the sign is not a valid sign, throw an IllegalArgumentException (Java) or ArgumentException (C#).
// Example:
// 
// arguments: 1, 2, "+"
// should return 3
// 
// arguments: 1, 2, "&"
// should throw an IllegalArgumentException (Java) or ArgumentException (C#)
// 
// Good luck!

// My solution

public class Calculator {
  public static double calculate(double a, double b, String op) {
    
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b == 0) {
          throw new IllegalArgumentException("Division by zero is not allowed.");
        }
        return a / b;
      default:
        throw new IllegalArgumentException("Invalid operator: " + op);
    }

  }
}
