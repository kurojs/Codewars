/*
create a program that will take in a string as input and, 
if there are duplicates of more than two alphabetical characters in the string,
returns the string with all the extra characters in a bracket.

for example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

please also ensure that the input is a string, and return "please enter a valid string" if it is not.
*/

// solution

function stringparse(string) {
  // Verificación de entrada: Si no es una cadena, abortamos la misión.
  if (typeof string !== 'string') {
    return 'Please enter a valid string';
  }

  let result = '';
  let count = 1; // Siempre contamos el primer carácter de una racha.

  // Recorremos la cadena, carácter por carácter.
  for (let i = 0; i < string.length; i++) {
    // Si el carácter actual es igual al siguiente, la racha continúa.
    if (i < string.length - 1 && string[i] === string[i + 1]) {
      count++;
    } else {
      // ¡La racha ha terminado! Ahora procesamos el resultado.
      if (count > 2) {
        // Caso de más de dos duplicados: formateamos con corchetes.
        result += string[i].repeat(2) + '[' + string[i].repeat(count - 2) + ']';
      } else {
        // Caso de 1 o 2 duplicados: simplemente los añadimos.
        result += string[i].repeat(count);
      }
      // Punto clave: reiniciamos el contador para la siguiente racha.
      count = 1;
    }
  }

  return result;
}
