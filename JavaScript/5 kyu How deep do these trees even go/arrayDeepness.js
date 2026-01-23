/*
You will be given an array arr representing a tree, which has nested arrays, 
which might have nest arrays in them, which... well, you get the idea.
You need to quantify how deep these arrays go by calculating these numbers:

    min: minimum depth
    max: maximum depth
    mean: average depth

and return the result as an object:

{
  min: <some number>,
  max: <some number>,
  mean: <some number>
}

Depth is quantified by all the leaves (i.e elements that are not arrays) of the tree.

It is guaranteed that the initial array will always be an array,
and there will never be any circular references.
*/

// Solution

function arrayDeepness(arr) {
  const depths = [];

  function getDepths(item, currentDepth) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        getDepths(item[i], currentDepth + 1);
      }
    } else {
      depths.push(currentDepth);
    }
  }

  getDepths(arr, 0);

  if (depths.length === 0) return { min: 0, max: 0, mean: 0 };

  const min = Math.min(...depths);
  const max = Math.max(...depths);
  const sum = depths.reduce((acc, val) => acc + val, 0);
  const mean = sum / depths.length;

  return { min, max, mean };
}
