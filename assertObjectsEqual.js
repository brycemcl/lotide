const assertObjectsEqual = (actual, expected) => {
  const { isEqual } = require('./isEqual');
  const inspect = require('util').inspect;
  if (isEqual(actual, expected)) {
    console.info(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.error(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = { assertObjectsEqual };