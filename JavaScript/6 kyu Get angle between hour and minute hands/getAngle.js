/*
Your task is to write a function that accepts string parameter time (Example: "22:17") 
and returns angle between minute and hour hands on round clock at that time.

The angle measured is the smaller of two angles the two hands may form.

If hours or minutes out of their range return or input is "Invalid input".

For example:

getAngle("15:15"); // 7.5
getAngle("s5:15"); // "Invalid input"
getAngle("error"); // "Invalid input"
*/

// Solution

function getAngle(t) {
  if (!/^\d{1,2}:\d{2}$/.test(t)) {
    return "Invalid input";
  }

  const [hours, minutes] = t.split(":").map(Number);

  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return "Invalid input";
  }

  const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;

  const minuteAngle = minutes * 6;

  let angle = Math.abs(hourAngle - minuteAngle);
  if (angle > 180) {
    angle = 360 - angle;
  }

  return angle;
}
