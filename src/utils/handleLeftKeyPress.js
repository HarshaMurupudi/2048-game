import addNumber from "./addNumber";
import checkIfGameOver from "./checkGameOver";

function pressLeft(data) {
  let oldGrid = data;
  let newArray = data.map((arr) => arr.slice());

  for (let i = 0; i < 4; i++) {
    let tiles = newArray[i];
    let slow = 0;
    let fast = 1;
    while (slow < 4) {
      switch (true) {
        case fast === 4:
          fast = slow + 1;
          slow++;
        case tiles[slow] === 0 && tiles[fast] === 0:
          fast++;
          break;
        case tiles[slow] === 0 && tiles[fast] !== 0:
          tiles[slow] = tiles[fast];
          tiles[fast] = 0;
          fast++;
          break;
        case tiles[slow] !== 0 && tiles[fast] === 0:
          fast++;
          break;
        case tiles[slow] !== 0 && tiles[fast] !== 0:
          if (tiles[slow] === tiles[fast]) {
            tiles[slow] = tiles[slow] + tiles[fast];
            tiles[fast] = 0;
          }
          slow++;
          fast = slow + 1;
          break;
        default:
          break;
      }
    }
    if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
      addNumber(newArray);
      if (checkIfGameOver(newArray)) {
        return false;
      }
    }
    return newArray;
  }
}

export default pressLeft;
