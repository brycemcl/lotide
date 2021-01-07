module.exports.takeUntil = (data, callbackFunction) => {
  let startOf = true;
  return data.reduce((previous, current) => {
    if (!startOf) {
      return previous;
    } else if (callbackFunction(current)) {
      startOf = false;
      return previous;
    } else {
      return [...previous, current];
    }
  }, []);
};


// const { assertEqual } = require('./assertEqual');
// const takeUntil = module.exports.takeUntil;
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
// assertEqual(takeUntil(data2, x => x === ','), [`I've`, `been`, `to`, `Hollywood`]);