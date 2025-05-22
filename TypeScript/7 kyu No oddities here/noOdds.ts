/* 
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

export function noOdds(values: number[]): number[] {
  const notOdd = values.filter((number) => {
    return number % 2 === 0;
  });

  return notOdd;
}
