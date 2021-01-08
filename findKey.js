module.exports.findKey = (objectArg, callbackFunction) => {
  let keyToReturn;
  for (const key in objectArg) {
    console.log(key);
    if (callbackFunction(objectArg[key])) {
      keyToReturn = key;
      break;
    }
  }
  return keyToReturn;
};


// const { assertEqual } = require('./assertEqual');
// const findKey = module.exports.findKey;
// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2), "noma");