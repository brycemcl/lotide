const { isEqual } = require('./isEqual');
module.exports.eqArrays = isEqual;

// const { assertEqual } = require('./assertEqual');
// const eqArrays = isEqual;
// assertEqual((eqArrays([1, 2, 3], [1, 2, 3])), true)
// assertEqual((eqArrays([1, 2, 3], [3, 2, 1])), false)
// assertEqual((eqArrays(["1", "2", "3"], ["1", "2", "3"])), true)
// assertEqual((eqArrays(["1", "2", "3"], ["1", "2", 3])), false)
// //test cases for nested arrays
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false