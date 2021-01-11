const { flipFlatObject } = require('../flipFlatObject');
const { assertEqual } = require('../assertEqual');



const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(flipFlatObject(bestTVShowsByGenre), {
  'The Expanse': 'sciFi',
  'Brooklyn Nine-Nine': 'comedy',
  'The Wire': 'drama'
});


/*
✅✅✅ Assertion Passed: [object Object] === [object Object]
*/