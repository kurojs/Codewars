/*
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/

// Solution

function add(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);
  
  const maxLength = Math.max(str1.length, str2.length);
  const padded1 = str1.padStart(maxLength, '0');
  const padded2 = str2.padStart(maxLength, '0');
  
  let result = '';
  
  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = parseInt(padded1[i]) + parseInt(padded2[i]);
    result = sum + result;
  }
  
  return parseInt(result);
}
