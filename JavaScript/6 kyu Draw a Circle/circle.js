/* 
In this kata, you will create a function, circle, that produces a string of some radius, 
according to certain rules that will be explained shortly. Here is the output of circle when passed the integer 10:

     █████████     
    ███████████    
  ███████████████  
  ███████████████  
 █████████████████ 
███████████████████
███████████████████
███████████████████
███████████████████
███████████████████
███████████████████
███████████████████
███████████████████
███████████████████
 █████████████████ 
  ███████████████  
  ███████████████  
    ███████████    
     █████████     

(Note: For Python and Ruby users, this will use '#', rather than '█')

The circle consists of spaces, and the character \u2588.
Note that this is a complete square of characters, so the 'gaps' are filled with spaces. For instance, the last line of the above ends with the five characters "\u2588     "; there are five spaces at the end.

All characters whose distance from the center is less than the given radius is defined as 'in the circle',
hence the character at that position should be filled with \u2588 rather than spaces. So, for instance, this is a circle of radius 2:

███
███
███

Whilst this isn't very circle-y, this is what the rules expect.

Here are the edge-case rules; there are examples in the example test cases:

    A negative radius should result in an empty string.
    A radius of 0 should produce the string "\n:.
    Any other result should end with \n.

Please note that the distance metric is Euclidean distance (the most common notion of distance)
centered around the middle of a character, where each character is of width and height exactly one.

(Any translations would be greatly appreciated!)
*/

// My solution

function circle(radius) {
  if (radius < 0) return "";
  if (radius === 0) return "\n";

  const size = radius * 2 + 1;
  const grid = [];

  for (let y = 0; y < size; y++) {
    let row = "";
    for (let x = 0; x < size; x++) {
      const dx = x - radius;
      const dy = y - radius;
      const distance = Math.sqrt(dx * dx + dy * dy);
      row += distance < radius ? "█" : " ";
    }
    grid.push(row);
  }

  while (grid[0].trim() === "") grid.shift();
  while (grid[grid.length - 1].trim() === "") grid.pop();

  let left = 0;
  let right = size - 1;

  while (grid.every((row) => row[left] === " ")) left++;
  while (grid.every((row) => row[right] === " ")) right--;

  const trimmedGrid = grid.map((row) => row.slice(left, right + 1));

  return trimmedGrid.join("\n") + "\n";
}
