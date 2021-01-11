const { takeUntil } = require('../takeUntil');
const { assertEqual } = require('../assertEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertEqual(takeUntil(data2, x => x === ','), [`I've`, `been`, `to`, `Hollywood`]);

/*
✅✅✅ Assertion Passed: 1,2,5,7,2 === 1,2,5,7,2
✅✅✅ Assertion Passed: I've,been,to,Hollywood === I've,been,to,Hollywood
*/