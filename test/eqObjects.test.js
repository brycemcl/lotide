const { eqObjects } = require('../eqObjects');
const { assertEqual } = require('../assertEqual');


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(abc), false);

//nested object test cases
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); //true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); //false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));  //false

/*
✅✅✅ Assertion Passed: true === true
✅✅✅ Assertion Passed: false === false
true
false
false
*/