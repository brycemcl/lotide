const middle = (arrayArg) => {
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

module.exports = { middle };