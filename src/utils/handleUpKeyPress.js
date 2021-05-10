// import checkIfGameOver from "./checkGameOver";
import addNumber from "./addNumber";

const pressUp = (data) => {
  let tiles = data.map((arr) => arr.slice());
  let oldData = JSON.parse(JSON.stringify(data));
  for (let i = 0; i < 4; i++) {
    let slow = 0;
    let fast = 1;
    while (slow < 4) {
      if (fast === 4) {
        fast = slow + 1;
        slow++;
        continue;
      }
      if (tiles[slow][i] === 0 && tiles[fast][i] === 0) {
        fast++;
      } else if (tiles[slow][i] === 0 && tiles[fast][i] !== 0) {
        tiles[slow][i] = tiles[fast][i];
        tiles[fast][i] = 0;
        fast++;
      } else if (tiles[slow][i] !== 0 && tiles[fast][i] === 0) {
        fast++;
      } else if (tiles[slow][i] !== 0 && tiles[fast][i] !== 0) {
        if (tiles[slow][i] === tiles[fast][i]) {
          tiles[slow][i] = tiles[slow][i] + tiles[fast][i];
          tiles[fast][i] = 0;
        }
        slow++;
        fast = slow + 1;
      }
    }
  }
  if (JSON.stringify(oldData) !== JSON.stringify(tiles)) {
    addNumber(tiles);
  }
  return tiles;
};

export default pressUp;
