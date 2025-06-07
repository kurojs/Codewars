/*
Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

The time should be in HH:MM format.

Examples:

digits: 1, 9, 8, 3 => result: "19:38"
digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)

Notes

    Result should be a valid 24-hour time, between 00:00 and 23:59.
    Only inputs which have valid answers are tested.
*/

import java.util.*;

public class Kata {

    public static String latestClock(int a, int b, int c, int d) {
        int[] digits = { a, b, c, d };
        List<String> validTimes = new ArrayList<>();

        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                if (j == i) continue;
                for (int k = 0; k < 4; k++) {
                    if (k == i || k == j) continue;
                    for (int l = 0; l < 4; l++) {
                        if (l == i || l == j || l == k) continue;

                        int hour = digits[i] * 10 + digits[j];
                        int minute = digits[k] * 10 + digits[l];

                        if (hour < 24 && minute < 60) {
                            String time = String.format(
                                "%02d:%02d",
                                hour,
                                minute
                            );
                            validTimes.add(time);
                        }
                    }
                }
            }
        }

        return Collections.max(validTimes);
    }
}
