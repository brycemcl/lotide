module.exports.map = (arrayArg, functionArg) => {
  const results = [];
  for (const item of arrayArg) {
    results.push(functionArg(item));
  }
  return results;
};


const { assertEqual } = require('./assertEqual');
const map = module.exports.map;
const words = ["ground", "control", "to", "major", "tom"];
assertEqual(map(words, i => i + i), ['groundground', 'controlcontrol', 'toto', 'majormajor', 'tomtom']);
assertEqual(map(words, i => i + " here we go"), [
  'ground here we go',
  'control here we go',
  'to here we go',
  'major here we go',
  'tom here we go'
]);
assertEqual(map(words, i => i === "ground"), [true, false, false, false, false]);