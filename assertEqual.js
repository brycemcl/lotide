// FUNCTION IMPLEMENTATION
module.exports.assertEqual = (actual, expected) => {
  const { isEqual } = require('./isEqual');
  if (isEqual(actual, expected)) {
    console.info(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const assertEqual = module.exports.assertEqual;
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual([1, 2], [1, 2]);
// assertEqual([1, 2], [1, 1]);