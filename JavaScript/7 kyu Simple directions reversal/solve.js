/*
In this Kata, you will be given directions and your task will be to find your way back.

solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']

More examples in test cases.

Good luck!

Please also try Simple remove duplicates
*/

// Solution

function solve(arr) {
  const roads = arr.map((x) => x.split(" on ")[1]).reverse();
  const dirs = arr.map((x) => x.split(" on ")[0]);

  return roads.map((road, i) => {
    if (i === 0) return `Begin on ${road}`;
    const prevDir = dirs[dirs.length - i];
    return `${prevDir === "Left" ? "Right" : "Left"} on ${road}`;
  });
}
