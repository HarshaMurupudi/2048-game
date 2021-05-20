import addNumber from "./addNumber";

function pressLeft(data) {
  let oldGrid = JSON.stringify(data);
  let newArray = data.map((arr) => arr.slice());

  for (let i = 0; i < 4; i++) {
    let tiles = newArray[i];
    let slow = 0;
    let fast = 1;
    while (slow < 4) {
      // row end reached
      if (fast === 4) {
        fast = slow + 1;
        slow++;
        continue;
      }
      if (tiles[slow] === 0 && tiles[fast] === 0) {
        fast++;
      } else if (tiles[slow] === 0 && tiles[fast] !== 0) {
        tiles[slow] = tiles[fast];
        tiles[fast] = 0;
        fast++;
      } else if (tiles[slow] !== 0 && tiles[fast] === 0) {
        fast++;
      } else if (tiles[slow] !== 0 && tiles[fast] !== 0) {
        if (tiles[slow] === tiles[fast]) {
          tiles[slow] = tiles[slow] + tiles[fast];
          tiles[fast] = 0;
        }
        slow++;
        fast = slow + 1;
      }
    }
  }

  if (oldGrid !== JSON.stringify(newArray)) {
    addNumber(newArray);
  }

  return newArray;
}

export default pressLeft;
