const countLetters = (stringToCount) => {
  return stringToCount.split('').reduce((previous, current) => {
    if (current === " ") return previous;
    previous[current] ? previous[current]++ : previous[current] = 1;
    return previous;
  }, []);
};

module.exports = { countLetters };