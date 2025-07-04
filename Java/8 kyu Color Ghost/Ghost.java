/*
Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

Ghost ghost = new Ghost();
ghost.getColor(); //=> "white" or "yellow" or "purple" or "red"
*/ 

// Solution

public class Ghost {
  public String getColor() {
    String[] colors = {"white", "yellow", "purple", "red"};
    int randomIndex = (int) (Math.random() * colors.length);
    return colors[randomIndex];
  }
}
