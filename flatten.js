module.exports.flatten = (arrayArg) => {

  const isArrayShallow = ((arrayArg) => {
    let returnBoolean = true;
    while (returnBoolean) {
      arrayArg.forEach(element => {
        returnBoolean = !(Array.isArray(element));
      });
      break;
    }
    return returnBoolean;
  });

  const flattenArray = (arrayArg) => {
    let arrayToReturn = [];
    arrayArg.forEach((element) => {
      if (Array.isArray(element)) {
        if (isArrayShallow(element)) {
          arrayToReturn = arrayToReturn.concat(element);
        } else {
          arrayToReturn = arrayToReturn.concat(flattenArray(element));
        }
      } else {
        arrayToReturn.push(element);
      }
    });
    return arrayToReturn;
  };
  return flattenArray(arrayArg);
};



// const flatten = module.exports.flatten;
// const { assertEqual } = require('./assertEqual');
// assertEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);