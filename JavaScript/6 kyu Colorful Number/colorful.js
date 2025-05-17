/*Problem

Determine whether a non-negative integer number is colorful or not.

263 is a colorful number because [2, 6, 3, 2*6, 6*3, 2*6*3] are all different; whereas
236 is not colorful, because [2, 3, 6, 2*3, 3*6, 2*3*6] has 6 twice.

So take all consecutive subsets of digits, take their products, and ensure all the products are different.
Examples

263  -->  true
236  -->  false
*/

// My solution

function colourful(number) {
  const stringnumber = number.toString();
  const products = new Set();

  for (let size = 1; size <= stringnumber.length; size++) {
    for (let start = 0; start <= stringnumber.length - size; start++) {
      const group = stringnumber.substring(start, start + size);

      let product = 1;
      for (let char of group) {
        product *= parseInt(char);
      }

      if (products.has(product)) {
        return false;
      }
      products.add(product);
    }
  }

  return true;
}
