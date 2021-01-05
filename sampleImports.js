const lotide = require('./lotide');

console.log(lotide.head([1, 3, 5,]));
lotide.assertEqual("Lighthouse Labs", "Bootcamp");
lotide.assertEqual(1, 1);
lotide.assertEqual(lotide.head([5, 6, 7]), 5);
lotide.assertEqual(lotide.head(["Hello", "Lighthouse", "Labs"]), "Hello");
lotide.assertEqual(lotide.head([0]), 0);
lotide.assertEqual(lotide.head([]), undefined);