/*
The cuckoo bird pops out of the cuckoo clock and chimes once on the quarter hour, half hour, and three-quarter hour.
At the beginning of each hour (1-12), it chimes out the hour. Given the current time and a positive integer n,
determine the time when the cuckoo bird has chimed n times.

Inputs:
initial_time - a string in the format "HH:MM", where 1 ≤ HH ≤ 12 and 0 ≤ MM ≤ 59, with leading 0’s if necessary.
n - an integer representing the target number of chimes, with 1 ≤ n ≤ 200.
Output: The time when the cuckoo bird has chimed n times - a string in the same format as initial_time.

If the cuckoo bird chimes at initial_time, include those chimes in the count. If the n'thchime is reached on the hour, 
report the time at the start of that hour (i.e. assume the cuckoo finishes chiming before the minute is up).

Example: "03:38", 19 should return "06:00".
Explanation: It chimes once at "03:45",4 times at "04:00", once each at "04:15", "04:30", "04:45", 5 times at "05:00",
and once each at "05:15", "05:30", "05:45". At this point it has chimed 16 times, so the 19th chime occurs when it chimes 6 times at "06:00".

Source: International Collegiate Programming Contest, North Central North American Regional, 2023
*/

// Solution

public class CuckooClock {

    public static String cuckooClock(String inputTime, int chimes) {
        int hour = Integer.parseInt(inputTime.substring(0, 2));
        int minute = Integer.parseInt(inputTime.substring(3, 5));

        int totalChimes = 0;

        while (true) {
            int chimesThisMinute = 0;

            if (minute == 0) {
                chimesThisMinute = hour == 12 ? 12 : hour;
            } else if (minute == 15 || minute == 30 || minute == 45) {
                chimesThisMinute = 1;
            }

            totalChimes += chimesThisMinute;

            if (totalChimes >= chimes) {
                return String.format("%02d:%02d", hour, minute);
            }

            minute++;
            if (minute == 60) {
                minute = 0;
                hour++;
                if (hour == 13) {
                    hour = 1; 
                }
            }
        }
    }
}

