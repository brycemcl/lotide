const { tail } = require('../tail');
const { assertEqual } = require('../assertEqual');


console.log(typeof tail([5, 6, 7])[0]);
console.log(typeof ([6, 7])[0]);
console.log(assertEqual([1], [1]));
console.log([6, 7]);
assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail([0]), 0);
assertEqual(tail([]), undefined);


/*
number
number
✅✅✅ Assertion Passed: 1 === 1
undefined
[ 6, 7 ]
✅✅✅ Assertion Passed: 6,7 === 6,7
🛑🛑🛑 Assertion Failed: Lighthouse,Labs !== Hello
🛑🛑🛑 Assertion Failed:  !== 0
🛑🛑🛑 Assertion Failed:  !== undefined
*/