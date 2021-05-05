const { default: pressLeft } = require("./handleLeftKeyPress");
const { default: pressDown } = require("./handleDownKeyPress");
const { default: pressRight } = require("./handleRightKeyPress");
const { default: pressUp } = require("./handleUpKeyPress");

const checkIfGameOver = (data) => {
  let checker = pressLeft(data);

  if (JSON.stringify(data) !== JSON.stringify(checker)) {
    return false;
  }

  let checker2 = pressDown(data);

  if (JSON.stringify(data) !== JSON.stringify(checker2)) {
    return false;
  }

  let checker3 = pressRight(data);

  if (JSON.stringify(data) !== JSON.stringify(checker3)) {
    return false;
  }

  let checker4 = pressUp(data);

  if (JSON.stringify(data) !== JSON.stringify(checker4)) {
    return false;
  }

  return true;
};

export default checkIfGameOver;
