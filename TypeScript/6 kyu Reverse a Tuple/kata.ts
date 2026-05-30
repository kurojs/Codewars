/*
Reverse a tuple... at the type level.

In other words, if you have

type Foo = [string, number, boolean]

then Reverse<Foo> should be the type [boolean, number, string]

Reverse should also reject non-tuple inputs; in other words, Reverse<1> (for example) should be a type error.

Since this is type-level programming, success is simply making the program compile.

*/

// Solution

export type Reverse<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : [];
