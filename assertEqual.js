//https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key
const sortObject = (object)=>{
  return Object.keys(object).sort().reduce(
    (obj, key) => {
      obj[key] = object[key];
      return obj;
    },
    {}
  );
};
  
// FUNCTION IMPLEMENTATION
module.exports.assertEqual = (actual, expected) => {
  if (typeof actual === "object") {
    actual = JSON.stringify(sortObject(actual));
  }
  if (typeof expected === "object") {
    expected = JSON.stringify(sortObject(expected));
  }

  if (actual === expected) {
    console.info(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const assertEqual = module.exports.assertEqual
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual([1,2], [1,2]);
// assertEqual([1,2], [1,1]);

