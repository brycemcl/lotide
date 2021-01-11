const { middle } = require('../middle');
const { assertArraysEqual } = require('../assertArraysEqual');

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


/*
✅✅✅ Assertion Passed:  ===
✅✅✅ Assertion Passed:  ===
✅✅✅ Assertion Passed: 2 === 2
✅✅✅ Assertion Passed: 2,3 === 2,3
✅✅✅ Assertion Passed: 2,3 === 2,3
✅✅✅ Assertion Passed: 3,4 === 3,4
*/