/*
The four angles of a triangle always add up to 180 degrees.

Given an array of three angles of a triangle, in degrees, return:
- "acute" if all three angles are less than 90 degrees
- "right" if one angle is exactly 90 degrees
- "obtuse" if one angle is greater than 90 degrees

It is assumed that the sum of the three angles is always 180 degrees.

Examples:

[45, 45, 90]  // returns "right"
[45, 45, 90]  // returns "right"
[30, 60, 90]  // returns "right"
[80, 80, 20]  // returns "acute"
[45, 45, 90]  // returns "right"
[100, 40, 40] // returns "obtuse"
*/

// Solution

function triangleType(angles) {
  if (angles.some((a) => a === 90)) return "right";
  if (angles.every((a) => a < 90)) return "acute";
  return "obtuse";
}
