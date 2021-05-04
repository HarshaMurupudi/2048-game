const calculateScore = (newData, oldData) => {
  var oldData1 = oldData
    .map((row) => row.slice())
    .flat()
    .filter((data) => data !== 2);

  var newData1 = newData
    .map((row) => row.slice())
    .flat()
    .filter((data) => data !== 2);

  oldData1.forEach((element) => {
    if (newData1.includes(element) && element !== 0) {
      newData1.splice(newData1.indexOf(element), 1, 0);
    }
  });
  return newData1.reduce((acc, ele) => {
    acc += ele;
    return acc;
  }, 0);
};

export default calculateScore;
