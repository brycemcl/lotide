const { pipe } = require('../pipe');

const one = (arg) => {
  return 1 + arg;
};
const two = (arg) => {
  return 2 * arg;
};
const three = (arg) => {
  return 3 / arg;
};

const compositeFunction = pipe(one, three);
console.log(compositeFunction(1));

const compositeFunctionTwo = pipe(one, two, three);
console.log(compositeFunctionTwo(1));

/*
1.5
0.75
*/