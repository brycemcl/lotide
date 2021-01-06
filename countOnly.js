// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
module.exports.countOnly = function(allItems, itemsToCount) {
  const arrayOfTrueItemsToCount = Object.entries(itemsToCount).filter((item) => item[1]).map((item) => item[0]);
  return (allItems.reduce((previous, current) => {
    if (arrayOfTrueItemsToCount.indexOf(current) !== -1) {
      previous[current] ? previous[current]++ : previous[current] = 1;
      return previous;
    } else {
      return previous;
    }

  }, []));
};




// const countOnly = module.exports.countOnly;
// const { assertEqual } = require('./assertEqual');
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);