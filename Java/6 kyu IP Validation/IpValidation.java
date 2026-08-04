//Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
//IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
//
//Input to the function is guaranteed to be a single string.
//
//Examples of valid inputs:
//        1.2.3.4
//        123.45.67.89
//
//Examples of invalid inputs:
//        1.2.3
//        1.2.3.4.5
//        123.456.78.90
//        123.045.067.089
//        01.2.3.4
//        1.2.3.4 "
//
//Notes:
//- Leading zeros are not valid.
//- Each octet must be a number from 0 to 255.
//- The string must contain exactly three dots.

//My solution

public class IpValidation {
    public static boolean isValidIP(String ip) {
        String[] octets = ip.split("\\.", -1);

        if (octets.length != 4) {
            return false;
        }

        for (String octet : octets) {
            if (octet.isEmpty() || octet.length() > 3) {
                return false;
            }

            if (!octet.matches("\\d+")) {
                return false;
            }

            if (octet.length() > 1 && octet.startsWith("0")) {
                return false;
            }

            int value = Integer.parseInt(octet);
            if (value < 0 || value > 255) {
                return false;
            }
        }

        return true;
    }
}