const { letterPositions } = require('../letterPositions');
const { assertEqual } = require('../assertEqual');

assertEqual(letterPositions("h"), { h: [0] });
assertEqual(letterPositions("hi"), { h: [0], i: [1] });
assertEqual(letterPositions("hii"), { h: [0], i: [1, 2] });
assertEqual(letterPositions("hiis"), { h: [0], i: [1, 2], s: [3] });
assertEqual(letterPositions("hiisq"), { h: [0], i: [1, 2], s: [3], q: [4] });
assertEqual(letterPositions("hiis q"), { h: [0], i: [1, 2], s: [3], q: [5] });
assertEqual(letterPositions("lighthouse in the house"), { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] });



/*
✅✅✅ Assertion Passed:  === [object Object]
✅✅✅ Assertion Passed:  === [object Object]
✅✅✅ Assertion Passed:  === [object Object]
✅✅✅ Assertion Passed:  === [object Object]
✅✅✅ Assertion Passed:  === [object Object]
✅✅✅ Assertion Passed:  === [object Object]
✅✅✅ Assertion Passed:  === [object Object]
*/