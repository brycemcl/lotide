const { flipFlatObject } = require('./flipFlatObject');
module.exports.findKeyByValue = (objectArg, valueArg) => flipFlatObject(objectArg)[valueArg];





// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };
// const findKeyByValue = module.exports.findKeyByValue;
// const { assertEqual } = require('./assertEqual');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);