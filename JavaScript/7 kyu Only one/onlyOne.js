/*
Task: Write function only_one which return True if ONLY ONE of the boolean flag is True,
otherwise return False. If there are no boolean flag, return False

  onlyOne() --> false
  onlyOne(true, false, false) --> true
  onlyOne(true, false, false, true) --> false
  onlyOne(false, false, false, false) --> false  
*/

// Solution

function onlyOne(...args) {
  let count = 0;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === true) {
      count++;
    }
  }

  return count === 1;
}
