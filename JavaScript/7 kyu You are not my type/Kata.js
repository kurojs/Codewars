/*
Write

Array.prototype.ofType = function(type){}

that will filter an array based on a supplied type.

For example:

var arr = [{ a: 'a' }, /a-z/, [1, 2, 3], i=>i];
arr.ofType(Object) === [{ a: 'a' }, /a-z/, [1, 2, 3], i=>i];
arr.ofType(RegExp) === [/a-z/];
arr.ofType(Array) === [[1, 2, 3]];
*/

// Solution

Object.defineProperty(Array.prototype, "ofType", {
  value: function (type) {
    return this.filter(
      (item) =>
        item !== null &&
        (typeof item === type.name.toLowerCase() || item instanceof type),
    );
  },
});
