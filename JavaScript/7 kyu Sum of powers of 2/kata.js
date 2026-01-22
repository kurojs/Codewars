/*
description

given a number n, you should find a set of numbers for which the sum equals n. this set must consist exclusively of values that are a power of 2 (eg: 2^0 => 1, 2^1 => 2, 2^2 => 4, ...).

the function powers takes a single parameter, the number n, and should return an array of unique numbers.
criteria

the function will always receive a valid input: any positive integer between 1 and the max integer value for your language (eg: for javascript this would be 9007199254740991 otherwise known as number.max_safe_integer).

the function should return an array of numbers that are a power of 2 (2^x = y).

each member of the returned array should be unique. (eg: the valid answer for powers(2) is [2], not [1, 1])

members should be sorted in ascending order (small -> large). (eg: the valid answer for powers(6) is [2, 4], not [4, 2])
*/

// solution

// return an array of numbers (that are a power of 2)
// for which the input "n" is the sum

const powers = (n) => {
  return n
    .toString(2)
    .split("")
    .reverse()
    .map((bit, index) => (bit === "1" ? 2 ** index : null))
    .filter((num) => num !== null);
};
