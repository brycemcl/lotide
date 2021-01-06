module.exports.countLetters = (stringToCount) => {
  return stringToCount.split('').reduce((previous, current) => {
    if (current === " ") return previous;
    previous[current] ? previous[current]++ : previous[current] = 1;
    return previous;
  }, []);
};

// const countLetters = module.exports.countLetters;
// const { assertEqual } = require('./assertEqual');
// const testLetters = {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// };
// assertEqual(countLetters("lighthouse in the house"), testLetters);