/*
You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take a walk.
The city provides its citizens with a Walk Generating App on their phones — everytime
you press the button it sends you an array of one-letter strings representing directions
to walk (eg. ['n', 's', 'w', 'e']).

You always walk one block at a time in a direction and you know it takes you one minute
to traverse one city block. Create a function that will return true if the walk the app
gives you will take you exactly ten minutes (you don't want to be early or late!) and
will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction
letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not
a walk, that's standing still!).

Example:

tenMinuteWalk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']) // returns true
tenMinuteWalk(['w', 's'])                                            // returns false
*/

// Solution

function tenMinuteWalk(walk) {
  if (walk.length !== 10) return false;

  let ns = 0;
  let ew = 0;

  for (const dir of walk) {
    if (dir === "n") ns++;
    if (dir === "s") ns--;
    if (dir === "e") ew++;
    if (dir === "w") ew--;
  }

  return ns === 0 && ew === 0;
}
