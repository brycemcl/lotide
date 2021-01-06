module.exports.middle = (arrayArg) => {
  return arrayArg.filter((item, index, array) => {
    if (array.length < 3) {
      // console.log("false", array.length, index + 1);
      return false;
    } else if (Math.ceil(array.length / 2) === index + 1) {
      // console.log("true", array.length, index + 1);
      return true;
    } else if (!(array.length % 2) && (Math.ceil(array.length / 2) + 1 === index + 1)) {
      // console.log("true", array.length, index + 1);
      return true;
    } else {
      // console.log("false", array.length, index + 1);
      return false;
    }
  });
};


// const { assertArraysEqual } = require('./assertArraysEqual');
// const middle = module.exports.middle;
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

