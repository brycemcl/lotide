const { flatten } = require('../flatten');
const { assertEqual } = require('../assertEqual');

assertEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);


/*
✅✅✅ Assertion Passed: 1,2,3,4,5,6 === 1,2,3,4,5,6
*/