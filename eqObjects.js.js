const { isEqual } = require('./isEqual');
module.exports.eqObjects = isEqual;


// const { assertEqual } = require('./assertEqual');
// const eqObjects = isEqual;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(abc), false);