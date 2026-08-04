//Move the first letter of each word to the end of it, then add "ay" to the end of the word.
//Leave punctuation marks untouched.
//
//Examples:
//        pigIt("Pig latin is cool") => "igPay atinlay siay oolcay"
//        pigIt("Hello world !")     => "elloHay orldway !"
//
//Notes:
//- The input is a single string containing words separated by spaces.
//- Words are considered sequences of letters only.
//- Punctuation marks (like '!', '?', '.') must remain in their original positions.
//- The input may contain multiple spaces? No, words are separated by a single space.

//My solution

public class PigLatin {
    public static String pigIt(String str) {
        StringBuilder result = new StringBuilder();

        for (String word : str.split(" ")) {
            if (word.matches("[a-zA-Z]+")) {
                result.append(word.substring(1)).append(word.charAt(0)).append("ay ");
            } else {
                result.append(word).append(" ");
            }
        }

        return result.toString().trim();
    }
}