/*
Task
Create function diff getting 2 sets as arguments and returning a new Set as result 
of relative complement of second set in first.
*/

// Solution

function diff(s1, s2) {
  let result = new Set();

  for (let item of s1) {
    if (!s2.has(item)) {
      result.add(item);
    }
  }

  return result;
}
