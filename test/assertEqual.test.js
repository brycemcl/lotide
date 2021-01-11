const { assertEqual } = require("../assertEqual");


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual([1, 2], [1, 2]);
assertEqual([1, 2], [1, 1]);

/*
🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp
✅✅✅ Assertion Passed: 1 === 1
✅✅✅ Assertion Passed: 1,2 === 1,2
🛑🛑🛑 Assertion Failed: 1,2 !== 1,1
*/