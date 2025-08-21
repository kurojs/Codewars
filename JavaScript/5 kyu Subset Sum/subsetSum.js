/*
Given a possibly empty list of strictly positive numbers and a non-negative target number,
return either a subset of the list summing to the target, or null or a similar empty value if no such subset exists.

The subset must consist of unique ( by index ) list elements.
If a particular value occurs more than once in the input list,
you can use it up to as many times as it occurs.
The empty subset sums to 0.
If multiple valid subsets exist, return any one of them.

The target will never be much bigger than the sum of the input list, and often quite a bit smaller.
*/

// Solution

function subsetSum(xs, target) {
  const n = xs.length;
  const memo = new Map();

  function dfs(i, t) {
    if (t === 0) return [];
    if (i >= n || t < 0) return null;

    const key = i + "," + t;
    if (memo.has(key)) return memo.get(key);

    const withCurrent = dfs(i + 1, t - xs[i]);
    if (withCurrent !== null) {
      const res = [xs[i], ...withCurrent];
      memo.set(key, res);
      return res;
    }

    const withoutCurrent = dfs(i + 1, t);
    memo.set(key, withoutCurrent);
    return withoutCurrent;
  }

  return dfs(0, target);
}
