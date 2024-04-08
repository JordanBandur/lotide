const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head([1, "Lighthouse", "Labs"]), 1);