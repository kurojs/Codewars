//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//        Examples
//
//        "the-stealth-warrior" gets converted to "theStealthWarrior"
//
//        "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//
//        "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

//My solution
class Solution {
    static String toCamelCase(String s) {
        String[] words = s.split("[-_]");
        StringBuilder camelCaseString = new StringBuilder();

        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            if (i == 0) {
                camelCaseString.append(word);
            } else {
                camelCaseString.append(word.substring(0, 1).toUpperCase());
                camelCaseString.append(word.substring(1).toLowerCase());
            }
        }

        return camelCaseString.toString();
    }
}
