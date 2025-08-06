/*
Task

Create function union getting 2 sets as arguments and returning a new Set 
as result of union of these 2 sets.
Examples:

A = new Set([1,2]);
B = new Set([2,3]);

C = union(A,B) // -> {1,2,3}
*/

// Solution

function union(s1, s2) {
  return new Set([...s1, ...s2]);
}
