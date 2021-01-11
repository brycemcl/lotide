const { assertObjectsEqual } = require('../assertObjectsEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

/*
✅✅✅ Assertion Passed: { a: '1', b: '2' } === { b: '2', a: '1' }
🛑🛑🛑 Assertion Failed: { a: '1', b: '2' } !== { a: '1', b: '2', c: '3' }
*/