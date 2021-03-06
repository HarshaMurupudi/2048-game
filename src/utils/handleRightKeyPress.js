import addNumber from "./addNumber";

const pressRight = (data) => {
  let oldData = JSON.stringify(data);
  let newArray = data.map((arr) => arr.slice());

  for (let i = 3; i >= 0; i--) {
    let tiles = newArray[i];
    let slow = tiles.length - 1;
    let fast = slow - 1;
    while (slow > 0) {
      // row end reached
      if (fast === -1) {
        fast = slow - 1;
        slow--;
        continue;
      }
      if (tiles[slow] === 0 && tiles[fast] === 0) {
        fast--;
      } else if (tiles[slow] === 0 && tiles[fast] !== 0) {
        tiles[slow] = tiles[fast];
        tiles[fast] = 0;
        fast--;
      } else if (tiles[slow] !== 0 && tiles[fast] === 0) {
        fast--;
      } else if (tiles[slow] !== 0 && tiles[fast] !== 0) {
        if (tiles[slow] === tiles[fast]) {
          tiles[slow] = tiles[slow] + tiles[fast];
          tiles[fast] = 0;
        }
        slow--;
        fast = slow - 1;
      }
    }
  }

  if (JSON.stringify(newArray) !== oldData) {
    addNumber(newArray);
  }

  return newArray;
};

export default pressRight;
