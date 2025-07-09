# The book "Guide to Teaching Puzzle-based Learning" includes the following puzzle:
#
# "A boy sometimes misses the bus. The bus is supposed to leave at 8:00, 
# but it arrives at the stop some time between 7:58 and 8:02 and departs 
# immediately once everyone is on board. The boy tries to reach the stop early,
# but due to various circumstances he arrives some time between 7:55 and 8:01. 
# How often does the boy miss the bus?" (Text edited for brevity.)
# 
# The book explains how to find the solution, which is 18.75%.
#
# Let's solve this problem in general. Inputs are the bus range first, followed by the boy range. 
# Both ranges are tuples (or lists or arrays, depending on language) of two elements; 
# the second time is guaranteed to be later than the first. 
# The bus and boy are equally likely to arrive at any time in their range.
# You don't have to take into account the time that the bus waits - assume people
# board the bus instantly :-). The boy makes the bus only if he arrives before or at the moment it does.
# Compute how often the boy misses the bus, as a percentage.
#
# Times are given as strings containing hour, minute, and AM/PM.
# Example: (("7:58 AM", "8:02 AM"), ("7:55 AM", "8:01 AM")) should return 18.75 
# Answers are accepted if within 0.001 of the solution.
#
# Note: The bus runs between 2am and 11pm. The boy's times will be sufficiently
# close to the bus times so that calculating across to the previous or next day is not needed. 

# Solution

from datetime import datetime

def catch_the_bus(bus_times, boy_times):
    
    def to_minutes(time_str: str) -> int:
        dt_obj = datetime.strptime(time_str, "%I:%M %p")
        return dt_obj.hour * 60 + dt_obj.minute

    a1 = float(to_minutes(boy_times[0]))
    a2 = float(to_minutes(boy_times[1]))
    b1 = float(to_minutes(bus_times[0]))
    b2 = float(to_minutes(bus_times[1]))

    total_area = (a2 - a1) * (b2 - b1)

    if total_area == 0:
        if a1 > b1:
            return 100.0
        else:
            return 0.0

    part1_len = max(0, min(a2, b1) - a1)
    area1 = part1_len * (b2 - b1)

    t1 = max(a1, b1)
    t2 = min(a2, b2)
    
    area2 = 0
    if t2 > t1:
        area2 = 0.5 * (t2 - t1) * ((b2 - t1) + (b2 - t2))

    catch_area = area1 + area2
    prob_catch = catch_area / total_area
    prob_miss_percent = (1.0 - prob_catch) * 100.0

    return prob_miss_percent
