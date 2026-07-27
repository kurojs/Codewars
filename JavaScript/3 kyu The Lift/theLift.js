/*
A multi-storey building has a lift that is controlled by a finite state machine.

The lift starts on the ground floor (0) and has a maximum capacity of people.
It will only move when all people who want to get on have gotten on, and 
when all people who want to get off have gotten off.

At each floor, the lift will:
1. Let people off first
2. Then let people on
3. Then move to the next floor (up or down based on direction)

The lift should always go up first if there are people waiting on higher floors.

Example:
The lift starts at floor 0 with capacity 5.
Queue at floor 0: [2, 3]  (2 people want to go up, 3 want to go down)
Queue at floor 1: [1]     (1 person wants to go up)

The lift should:
- Pick up 2 from floor 0 (goes up)
- Pick up 1 from floor 1 (goes up)
- Drop off at floor 2
- Drop off at floor 3
- Return to floor 0

Notes:
- The lift has a maximum capacity of n people.
- People enter and exit in the order they appear in the queue.
- The lift always starts at floor 0.
- The lift only moves one floor at a time.
*/

// Solution

function theLift(queues, capacity) {
  const floors = queues.length;
  const lift = [];
  const visited = [0];
  let direction = 1;
  let currentFloor = 0;
  
  while (true) {
    // Let people off
    for (let i = lift.length - 1; i >= 0; i--) {
      if (lift[i] === currentFloor) {
        lift.splice(i, 1);
      }
    }
    
    // Let people on
    while (lift.length < capacity && queues[currentFloor].length > 0) {
      const person = queues[currentFloor].shift();
      if (person > currentFloor) {
        lift.push(person);
      }
    }
    
    // Determine next floor
    if (lift.length === 0) {
      // Check if there's anyone waiting
      let anyoneWaiting = false;
      for (let i = 0; i < floors; i++) {
        if (queues[i].length > 0) {
          anyoneWaiting = true;
          break;
        }
      }
      if (!anyoneWaiting) break;
    }
    
    // Move
    if (direction === 1) {
      if (currentFloor < floors - 1) {
        currentFloor++;
      } else {
        direction = -1;
        currentFloor--;
      }
    } else {
      if (currentFloor > 0) {
        currentFloor--;
      } else {
        direction = 1;
        currentFloor++;
      }
    }
    
    if (visited[visited.length - 1] !== currentFloor) {
      visited.push(currentFloor);
    }
  }
  
  return visited;
}