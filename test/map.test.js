const { map } = require('../map');
const { assertEqual } = require('../assertEqual');


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

/*
✅✅✅ Assertion Passed: groundground,controlcontrol,toto,majormajor,tomtom === groundground,controlcontrol,toto,majormajor,tomtom
✅✅✅ Assertion Passed: ground here we go,control here we go,to here we go,major here we go,tom here we go === ground here we go,control here we go,to here we go,major here we go,tom here we go
✅✅✅ Assertion Passed: true,false,false,false,false === true,false,false,false,false
*/