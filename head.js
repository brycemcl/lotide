export const head = (array) => array[0];;

import { isDebug } from './isDebug.js';
isDebug((() => {
  import('./assertEqual.js').then((assertEqual) => {
    assertEqual(head([5, 6, 7]), 5);
    assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
    assertEqual(head([0]), 0);
    assertEqual(head([]), undefined);
  });
}))();