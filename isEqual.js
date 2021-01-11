const isEqual = (actual, expected) => {

  //https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
  const sortObject = (object) => {
    return Object.keys(object).sort().reduce(
      (obj, key) => {
        obj[key] = object[key];
        return obj;
      },
      {}
    );
  };
  if (typeof actual === "object") {
    actual = JSON.stringify(sortObject(actual));
  }
  if (typeof expected === "object") {
    expected = JSON.stringify(sortObject(expected));
  }

  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

module.exports = { isEqual };