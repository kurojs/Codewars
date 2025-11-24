/*
In order to stop too much communication from happening, your overlords declare
that you are no longer allowed to use certain functionality in your code!

Disallowed functionality:

    Strings
    Numbers
    Regular Expressions
    Functions named "Hello", "World", "HelloWorld" or anything similar.
    Object keys named "Hello", "World", "HelloWorld" or anything similar.

Without using the above, output the string "Hello World!" to prove that there is always a way.
*/

// Solution

var helloWorld = function () {
  var one = +true;
  var two = one + one;
  var four = two + two;
  var eight = four + four;
  var sixteen = eight + eight;
  var thirtyTwo = sixteen + sixteen;
  var sixtyFour = thirtyTwo + thirtyTwo;

  var H = sixtyFour + eight;
  var e = sixtyFour + thirtyTwo + four + one;
  var l = sixtyFour + thirtyTwo + eight + four;
  var o = l + two + one;
  var space = thirtyTwo;
  var W = sixtyFour + sixteen + four + two + one;
  var r = o + two + one;
  var d = sixtyFour + thirtyTwo + four;
  var bang = thirtyTwo + one;

  return String.fromCharCode(H, e, l, l, o, space, W, o, r, l, d, bang);
};
