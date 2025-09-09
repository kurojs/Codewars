/*
Write a function that takes in a binary string and returns the equivalent decoded text 
(the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.

The input string will always be a valid binary string.

Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string.
*/

// Solution

export function binaryToString(binary: string): string {
  let bloques = binary.match(/.{1,8}/g);
  let decimales = bloques?.map((bloque) => parseInt(bloque, 2));
  let caracteres = decimales?.map((decimal) => String.fromCharCode(decimal));
  return caracteres?.join("") || "";
}
