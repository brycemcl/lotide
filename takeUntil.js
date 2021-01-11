const takeUntil = (data, callbackFunction) => {
  let startOf = true;
  return data.reduce((previous, current) => {
    if (!startOf) {
      return previous;
    } else if (callbackFunction(current)) {
      startOf = false;
      return previous;
    } else {
      return [...previous, current];
    }
  }, []);
};

module.exports = { takeUntil };