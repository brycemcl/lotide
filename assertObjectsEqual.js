module.exports.assertObjectsEqual = (actual, expected) => {
  const { isEqual } = require('./isEqual');
  const inspect = require('util').inspect;
  if (isEqual(actual, expected)) {
    console.info(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.error(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


// const assertObjectsEqual = module.exports.assertObjectsEqual;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc);