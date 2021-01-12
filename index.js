const { tail } = require("./tail");
const { pipe } = require("./pipe");
const { countOnly } = require("./countOnly");
const { findKeyByValue } = require("./findKeyByValue");
const { assertEqual } = require("./assertEqual");
const { flatten } = require("./flatten");
const { flipFlatObject } = require("./flipFlatObject");
const { assertObjectsEqual } = require("./assertObjectsEqual");
const { head } = require("./head");
const { middle } = require("./middle");
const { eqArrays } = require("./eqArrays");
const { isEqual } = require("./isEqual");
const { takeUntil } = require("./takeUntil");
const { findKey } = require("./findKey");
const { assertArraysEqual } = require("./assertArraysEqual");
const { countLetters } = require("./countLetters");
const { eqObjects } = require("./eqObjects");
const { map } = require("./map");
const { letterPositions } = require("./letterPositions");
const { without } = require("./without");
module.exports =
{
  tail,
  pipe,
  countOnly,
  findKeyByValue,
  assertEqual,
  flatten,
  flipFlatObject,
  assertObjectsEqual,
  head,
  middle,
  eqArrays,
  isEqual,
  takeUntil,
  findKey,
  assertArraysEqual,
  countLetters,
  eqObjects,
  map,
  letterPositions,
  without
};