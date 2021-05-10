var cloneDeep = require('lodash.clonedeep');

const { default: pressLeft } = require("./handleLeftKeyPress");
const { default: pressDown } = require("./handleDownKeyPress");
const { default: pressRight } = require("./handleRightKeyPress");
const { default: pressUp } = require("./handleUpKeyPress");

const checkIfGameOver = (data) => {
  const tilesData = JSON.stringify(cloneDeep(data))

  if (tilesData !== JSON.stringify(pressLeft(cloneDeep(data)))) return false;
  if (tilesData !== JSON.stringify(pressDown(cloneDeep(data)))) return false;
  if (tilesData !== JSON.stringify(pressRight(cloneDeep(data)))) return false;
  if (tilesData !== JSON.stringify(pressUp(cloneDeep(data)))) return false;

  return true;
};

export default checkIfGameOver;
