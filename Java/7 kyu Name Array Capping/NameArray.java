//  Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.
//  Examples
//
//  ['jo', 'nelson', 'jurie']     -->  ['Jo', 'Nelson', 'Jurie']
//  ['KARLY', 'DANIEL', 'KELSEY'] -->  ['Karly', 'Daniel', 'Kelsey']

// My solution
public class NameArray {
    public static String[] capMe(String[] strings) {

        for (int i = 0; i < strings.length; i++) {
            if (strings[i].length() > 0) {
                strings[i] = strings[i].substring(0, 1).toUpperCase() + strings[i].substring(1).toLowerCase();
            }
        }

        return strings;
    }
}



