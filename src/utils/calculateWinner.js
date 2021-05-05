const calculateWinner = (tiles) => {
  return tiles
    .map((row) => row.slice())
    .flat()
    .includes(2048);
};

export default calculateWinner;
