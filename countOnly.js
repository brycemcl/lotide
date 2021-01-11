// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
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

module.exports = { countOnly };