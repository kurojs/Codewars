/* 
Brush up on your Algebra while brushing up on your coding!

You receive a mystery function f(x) that accepts a single real number [1] and returns a single real number. 
For this kata, the mystery function will always be linear [2].

Your goal is to reverse-engineer the equation inside the mystery function. Return values will be of the form [m, b] [2].

const exampleEquation = (x) => (2 * x) + 5; // y = 2x + 5
findMysteryEquation(exampleEquation); // returns [2, 5];

[1] Real number: Any positive, negative, or zero number; includes all types of decimals and fractions.
For the purposes of this kata, use your language's version of a floating-point number.

[2] Linear: When graphed, the x and y coordinates will produce a straight line. 
This is usually represented as y = mx + b, where m is the slope and b is the y-intercept.
*/

// My solution

function findMysteryEquation(func) {
  const x1 = 1;
  const x2 = 2;
  const y1 = func(x1);
  const y2 = func(x2);
  const m = (y2 - y1) / (x2 - x1);
  const b = func(0);
  return [m, b];
}
