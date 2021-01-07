module.exports.pipe = (...inputFunctions) => {
  let compositeFunction = inputFunctions[0];
  for (let index = 1; index < inputFunctions.length; index++) {
    compositeFunction = ((functionOne, functionTwo) => (inputFunctions) => {
      return functionOne(functionTwo(inputFunctions));
    })(inputFunctions[index], compositeFunction);
  }
  return compositeFunction;
};

// const pipe = module.exports.pipe;
// const one = (arg) => {
//   return 1 + arg;
// };
// const two = (arg) => {
//   return 2 * arg;
// };
// const three = (arg) => {
//   return 3 / arg;
// };

// const compositeFunction = pipe(one, three);
// console.log(compositeFunction(1));

// const compositeFunctionTwo = pipe(one, two, three);
// console.log(compositeFunctionTwo(1));