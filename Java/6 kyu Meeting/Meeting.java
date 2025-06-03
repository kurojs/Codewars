/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that

    makes this string uppercase
    gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people have the same first name too.
Notes

    You can see another examples in the "Sample tests".
*/

// My solution

import java.util.*;

class Meeting {

    public static String meeting(String s) {
        return Arrays.stream(s.toUpperCase().split(";"))
            .map(name -> {
                String[] parts = name.split(":");
                return new String[] { parts[1], parts[0] }; // [lastName, firstName]
            })
            .sorted((a, b) -> {
                int cmp = a[0].compareTo(b[0]);
                return cmp != 0 ? cmp : a[1].compareTo(b[1]);
            })
            .map(pair -> "(" + pair[0] + ", " + pair[1] + ")")
            .reduce("", String::concat);
    }
}
