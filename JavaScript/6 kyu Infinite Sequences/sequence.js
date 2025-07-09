/**
Write a function which, given a function that returns the nth element of a sequence
(starting at 0), returns an object that generates the sequence's elements indefinitely. 
Your sequence object must have two methods:

    #take(n) (JS: take(n)): get n elements from the sequence
    #take_while(pred) (JS: takeWhile(pred)): get all elements until the
    sequence generates one that fails the predicate pred()

Example:

sequence(n => n).takeWhile(n => n < 10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
sequence(n => n * n).take(10); // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
*/

// Solution

function sequence(fun) {
  return {
    take(n) {
      const result = [];
      for (let i = 0; i < n; i++) {
        result.push(fun(i));
      }
      return result;
    },
    takeWhile(pred) {
      const result = [];
      let i = 0;
      while (true) {
        const element = fun(i);
        if (pred(element)) {
          result.push(element);
          i++;
        } else {
          break;
        }
      }
      return result;
    },
  };
}
