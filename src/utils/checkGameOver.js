const { default: pressLeft } = require("./handleLeftKeyPress");
const { default: pressDown } = require("./handleDownKeyPress");
const { default: pressRight } = require("./handleRightKeyPress");
const { default: pressUp } = require("./handleUpKeyPress");

const checkIfGameOver = (data) => {
  const tilesData = JSON.stringify(data)

  if (tilesData !== JSON.stringify(pressLeft(data))) return false;
  if (tilesData !== JSON.stringify(pressDown(data))) return false;
  if (tilesData !== JSON.stringify(pressRight(data))) return false;
  if (tilesData !== JSON.stringify(pressUp(data))) return false;

  return true;
};

export default checkIfGameOver;
