/*
In languages that use UTF-16 encoding for strings (JavaScript, JVM languages like Java, .NET languages like C#...),
if the code point of a character is larger than 0xFFFF, it will be treated as two code units.

For example:

The code point of the emoji 🙉 (U+1F649, Hear-No-Evil Monkey) is 0x1F649.

"🙉".length(); // 2

Write a function that returns the real length of a string.

"abcd"   --> 4
"🙉"     --> 1
"😸🦌🚀" --> 3
*/

// Solution

class Kata {
    public static int getRealLength(String str) {
        return str.codePoints().toArray().length;
    }
}
