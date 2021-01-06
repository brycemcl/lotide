module.exports.without = (sourceArray, itemsToRemove) => {
  const reducer = (accumulator, currentValue) => {
    if (itemsToRemove.indexOf(currentValue) === -1) {
      return accumulator.concat(currentValue);
    } else {
      return accumulator;
    }
  };
  return sourceArray.reduce(reducer, []);
};

// const without = module.exports.without;
// const { assertArraysEqual } = require('./assertArraysEqual');
// assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
// ;((sourceArray, itemsToRemove) => {
//   const beforeSourceArray = sourceArray;
//   const beforeItemsToRemove = itemsToRemove;
//   without(sourceArray, itemsToRemove);
//   assertArraysEqual(beforeSourceArray, sourceArray);
//   assertArraysEqual(beforeItemsToRemove, itemsToRemove);
// })(["1", "2", "3"], [1, 2, "3"]);