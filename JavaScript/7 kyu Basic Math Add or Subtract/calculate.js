/*
In this kata, you will do addition and subtraction on a given string.
The return value must be also a string.

Note: the input will not be empty.
Examples

"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

// My solution

function calculate(str) {
  str = str.replaceAll("plus", "+").replaceAll("minus", "-");

  let numbers = str.split(/\+|-/);
  let operators = str.match(/[+-]/g);

  let result = parseInt(numbers[0]);

  for (let i = 0; i < operators.length; i++) {
    let num = parseInt(numbers[i + 1]);

    if (operators[i] === "+") {
      result += num;
    } else {
      result -= num;
    }
  }

  return result.toString();
}
