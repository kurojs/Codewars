/*
Array Exchange and Reversing

It's time for some array exchange! The objective is simple: 
exchange the elements of two arrays in-place in a way that their new content is also reversed.
The arrays may be of unequal lengths, in which case you will have to expand the shorter onein-place.

# before
my_array = ['a', 'b', 'c']
other_array = [1, 2, 3]

exchange_arrays(my_array, other_array)

# after
my_array == [3, 2, 1]
other_array == ['c', 'b', 'a']
*/

// Solution

function exchangeWith(a, b) {
  const reversedA = [...a].reverse();
  const reversedB = [...b].reverse();

  const newALen = b.length;
  const newBLen = a.length;

  a.length = 0;
  b.length = 0;

  for (let i = 0; i < newALen; i++) {
    a.push(reversedB[i] !== undefined ? reversedB[i] : null);
  }

  for (let i = 0; i < newBLen; i++) {
    b.push(reversedA[i] !== undefined ? reversedA[i] : null);
  }

  return [a, b];
}
