/*
toggle, set, and clear bits

your task is to implement a collection of utility functions that perform common bitwise operations on integers.
all bit positions are zero-based, meaning position 0 refers to the least significant bit.

toggles (flips) the bit at the given position. if the bit is 0, it becomes 1; if it is 1, it becomes 0.

console.log(togglebit(5, 1)); // 7

sets the bit at the given position to 1, without modifying other bits.

console.log(setbit(5, 1)); // 7

clears (sets to 0) the bit at the given position, leaving all other bits unchanged.

console.log(clearbit(7, 1)); // 5

checks whether the bit at the given position is set to 1. returns true if it is set, otherwise false.

console.log(isbitset(5, 0)); // true

sets all bits to 1 wherever the mask has 1s.

console.log(setmultiplebits(5, 3)); // 7

clears all bits wherever the mask has 1s.

console.log(clearmultiplebits(7, 2)); // 5

toggles all bits wherever the mask has 1s.

console.log(togglemultiplebits(5, 3)); // 6
*/

// solution

// 1. toggle a bit at a given position{

const toggleBit = (n, position) => {
  return n ^ (1 << position);
};

// 2. set a bit at a given position
const setBit = (n, position) => {
  return n | (1 << position);
};

// 3. clear a bit at a given position
const clearBit = (n, position) => {
  return n & ~(1 << position);
};

// 4. check if a bit at a given position is set
const isBitSet = (n, position) => {
  return (n & (1 << position)) !== 0;
};

// 5. set multiple bits using a mask
const setMultipleBits = (n, mask) => {
  return n | mask;
};

// 6. clear multiple bits using a mask
const clearMultipleBits = (n, mask) => {
  return n & ~mask;
};

// 7. toggle multiple bits using a mask
const toggleMultipleBits = (n, mask) => {
  return n ^ mask;
};
