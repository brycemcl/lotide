const flipFlatObject = (objectArg) => {
  return Object.entries(objectArg).reduce((previous, current) => {
    if (typeof current[1] !== "object") previous[current[1]] = current[0];
    return previous;
  }, {});
};


module.exports = { flipFlatObject };