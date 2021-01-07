module.exports.flipFlatObject = (objectArg) => {
  return Object.entries(objectArg).reduce((previous, current) => {
    if (typeof current[1] !== "object") previous[current[1]] = current[0];
    return previous;
  }, {});
};




// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };
// const flipFlatObject = module.exports.flipFlatObject;
// const { assertEqual } = require('./assertEqual');
// const { findKeyByValue } = require('./findKeyByValue');

// assertEqual(flipFlatObject(bestTVShowsByGenre), {
//   'The Expanse': 'sciFi',
//   'Brooklyn Nine-Nine': 'comedy',
//   'The Wire': 'drama'
// });