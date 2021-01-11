const { flipFlatObject } = require('./flipFlatObject');
const findKeyByValue = (objectArg, valueArg) => flipFlatObject(objectArg)[valueArg];



module.exports = { findKeyByValue };