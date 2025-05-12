// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:
//
//     Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
//     Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
//
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")
// Example
//
// "#FF9933" --> {r: 255, g: 153, b: 51}
//

// My solution


import java.util.HashMap;

public class HexToRGB {

  public static HashMap<String, Integer> hexStringToRGB(String hex) {

    hex = hex.replace("#", "");
    
    int r = Integer.parseInt(hex.substring(0, 2), 16);
    int g = Integer.parseInt(hex.substring(2, 4), 16);
    int b = Integer.parseInt(hex.substring(4, 6), 16);

    HashMap<String, Integer> rgb = new HashMap<>();
    rgb.put("r", r);
    rgb.put("g", g);
    rgb.put("b", b);

    return rgb;
  }
}

