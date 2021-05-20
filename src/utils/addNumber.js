import checkIfGameOver from "./checkGameOver";

export default function addNumber(data) {
  let added = false;
  let gridFull = false;
  let attempts = 0;

  while (!added) {
    // can be removed
    if (gridFull) {
      break;
    }

    let rand1 = Math.floor(Math.random() * 4);
    let rand2 = Math.floor(Math.random() * 4);
    attempts++;

    if (data[rand1][rand2] === 0) {
      data[rand1][rand2] = 2;
      added = true;
    }

    // #TODO: Refactor random logic
    if (attempts > 50) {
      gridFull = true;

      if (checkIfGameOver(data)) {
        return false;
      }
    }
  }

  return data;
}
