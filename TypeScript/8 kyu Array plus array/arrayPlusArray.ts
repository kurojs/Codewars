/*
  I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

  P.S. Each array includes only integer numbers. Output is a number too.
*/

// Solution

export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }

  return sum1 + sum2;
};

// Extra solution using reduce
/*
export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  return [...arr1, ...arr2].reduce((sum, num) => sum + num, 0);
};
*/
