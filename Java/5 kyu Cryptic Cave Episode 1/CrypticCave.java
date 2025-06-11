/*
Following the trails of your lost master - Λoile - who you inherited your mad programming skills from, 
you have finally caught a lead and begin your adventure into the dungeon where progress can be made. 
To pass the first cave, you need to crack the code on the podium sitting in front of the gate, blocking you from moving onwards.

Fortunately, you have access to the internet, make good use of it. 
To pass, implement the function in your language based on the code as given. Good luck!

:345**/.87vv98,:<>
v/*52:,+2*<>**-  |
>6%.:52*%.1+:25*^@
*/

// My solution

public class CrypticCave {

    public static String podiumCode() {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < 720; i++) {
            int horas = i / 60;
            int minutos = i % 60;
            sb.append(horas).append(":");
            if (minutos < 10) sb.append("0");
            sb.append(minutos).append("\n");
        }

        return sb.toString();
    }
}

