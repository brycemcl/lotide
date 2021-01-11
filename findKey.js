const findKey = (objectArg, callbackFunction) => {
  let keyToReturn;
  for (const key in objectArg) {
    if (callbackFunction(objectArg[key])) {
      keyToReturn = key;
      break;
    }
  }
  return keyToReturn;
};

module.exports = { findKey };