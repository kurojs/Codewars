/*
imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):
Then add the letters in a clockwise direction: Then remove the circle:

If we read the result from left to right, we get csordaew.

Decoding is the same process in reverse. If we decode csordaew, we get codewars.
Examples:

    encode "codewars" -> "csordaew"
    decode "csordaew" -> "codewars"

    encode "white" -> "wehti"
    decode "wehti" -> "white"
*/

// Solution

function encode(s) {
  const letras = s.split("");
  const resultado = [];

  let izquierda = 0;
  let derecha = letras.length - 1;

  while (izquierda <= derecha) {
    if (izquierda === derecha) {
      resultado.push(letras[izquierda]);
    } else {
      resultado.push(letras[izquierda], letras[derecha]);
    }
    izquierda++;
    derecha--;
  }

  return resultado.join("");
}

function decode(s) {
  const resultado = new Array(s.length);
  let izquierda = 0;
  let derecha = s.length - 1;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      resultado[izquierda] = s[i];
      izquierda++;
    } else {
      resultado[derecha] = s[i];
      derecha--;
    }
  }

  return resultado.join("");
}
