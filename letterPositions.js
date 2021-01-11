const letterPositions = (stringArg) => {
  return stringArg.split('').reduce((previous, current, index) => {
    if (current !== " ") previous[current] ? previous[current].push(index) : previous[current] = [index];
    return previous;
  }, []);
};

module.exports = { letterPositions };