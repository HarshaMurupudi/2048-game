const calculateScore = (newData, oldData) => {
  var flatenedOldData = oldData
    .map((row) => row.slice())
    .flat()
    .filter((data) => data !== 2);

  var flatenedNewData = newData
    .map((row) => row.slice())
    .flat()
    .filter((data) => data !== 2);

  // remove old values from the new data
  flatenedOldData.forEach((item) => {
    if (flatenedNewData.includes(item) && item !== 0) {
      flatenedNewData.splice(flatenedNewData.indexOf(item), 1, 0);
    }
  });

  return flatenedNewData.reduce((acc, entry) => {
    acc += entry;
    return acc;
  }, 0);
};

export default calculateScore;