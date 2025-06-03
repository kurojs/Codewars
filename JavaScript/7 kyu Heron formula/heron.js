/*
Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:
s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)}s∗(s−a)∗(s−b)∗(s−c)
​

where: s=a+b+c2 s = \dfrac{a + b + c} 2 s=2a+b+c​

Answer will be tested for correctness with 0.01 margin.
*/

function heron(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
