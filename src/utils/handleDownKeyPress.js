import addNumber from "./addNumber";
import checkIfGameOver from "./checkGameOver";

const pressDown = (data) => {
  let tiles = data.map((arr) => arr.slice());
  let oldData = JSON.parse(JSON.stringify(data));
  for (let i = 3; i >= 0; i--) {
    let slow = tiles.length - 1;
    let fast = slow - 1;
    while (slow > 0) {
      if (fast === -1) {
        fast = slow - 1;
        slow--;
        continue;
      }
      if (tiles[slow][i] === 0 && tiles[fast][i] === 0) {
        fast--;
      } else if (tiles[slow][i] === 0 && tiles[fast][i] !== 0) {
        tiles[slow][i] = tiles[fast][i];
        tiles[fast][i] = 0;
        fast--;
      } else if (tiles[slow][i] !== 0 && tiles[fast][i] === 0) {
        fast--;
      } else if (tiles[slow][i] !== 0 && tiles[fast][i] !== 0) {
        if (tiles[slow][i] === tiles[fast][i]) {
          tiles[slow][i] = tiles[slow][i] + tiles[fast][i];
          tiles[fast][i] = 0;
        }
        slow--;
        fast = slow - 1;
      }
    }
  }
  if (JSON.stringify(tiles) !== JSON.stringify(oldData)) {
    addNumber(tiles);
    if (checkIfGameOver(tiles)) {
      return false;
    }
  }
  return tiles;
};

export default pressDown;
