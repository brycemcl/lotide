const { without } = require('../without');
const { assertArraysEqual } = require('../assertArraysEqual');

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
; ((sourceArray, itemsToRemove) => {
  const beforeSourceArray = sourceArray;
  const beforeItemsToRemove = itemsToRemove;
  without(sourceArray, itemsToRemove);
  assertArraysEqual(beforeSourceArray, sourceArray);
  assertArraysEqual(beforeItemsToRemove, itemsToRemove);
})(["1", "2", "3"], [1, 2, "3"]);

/*
✅✅✅ Assertion Passed: 2,3 === 2,3
✅✅✅ Assertion Passed: 1,2 === 1,2
✅✅✅ Assertion Passed: 1,2,3 === 1,2,3
✅✅✅ Assertion Passed: 1,2,3 === 1,2,3
*/