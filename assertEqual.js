// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  const { isEqual } = require('./isEqual');
  if (isEqual(actual, expected)) {
    console.info(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = { assertEqual };