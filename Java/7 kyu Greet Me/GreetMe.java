// Write a method that takes one argument as name and then greets that name,
// capitalized and ends with an exclamation point.
//
// Example:
//
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
//

public class GreetMe{
  public static String greet(String name){
    String lower = name.toLowerCase();
    String capitalized = lower.substring(0, 1).toUpperCase() + lower.substring(1);
    return "Hello " + capitalized + "!";
  }
}
