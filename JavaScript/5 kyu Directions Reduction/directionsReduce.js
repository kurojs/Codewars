/*
Once upon a time, on a way through the old wild mountainous west, a man was given directions to go from one side
of a mountain to the other. The directions told him to go north, then east, then south, then west, etc.
He immediately realized that going north and then south was a waste of time (same for east/west).

Write a function that takes an array of directions (n, s, e, w) and reduces them to the simplest form
by cancelling out opposite directions.

Examples:

directionsReduce(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) // returns ["WEST"]
directionsReduce(["NORTH", "SOUTH", "EAST", "WEST"])                            // returns []
*/

// Solution

function directionsReduce(dirs) {
  const opposites = { NORTH: "SOUTH", SOUTH: "NORTH", EAST: "WEST", WEST: "EAST" };
  const stack = [];

  for (const dir of dirs) {
    if (stack.length > 0 && stack[stack.length - 1] === opposites[dir]) {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }

  return stack;
}
