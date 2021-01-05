// FUNCTION IMPLEMENTATION
export const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.info(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
import { isDebug } from './isDebug.js';
isDebug((() => {
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
}))();