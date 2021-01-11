const pipe = (...inputFunctions) => {
  let compositeFunction = inputFunctions[0];
  for (let index = 1; index < inputFunctions.length; index++) {
    compositeFunction = ((functionOne, functionTwo) => (inputFunctions) => {
      return functionOne(functionTwo(inputFunctions));
    })(inputFunctions[index], compositeFunction);
  }
  return compositeFunction;
};

module.exports = { pipe };