const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const result2 = tail(["Bye", "For", "Now", "Lighthouse", "Labs"]);
assertEqual(result2.length, 4);
assertEqual(result2[0], "For");
assertEqual(result2[1], "Now");
assertEqual(result2[2], "Lighthouse");
assertEqual(result2[3], "Labs");

const result3 = tail(["Hello"]);
assertEqual(result3.length, 0);
assertEqual(result3[0], undefined);

const result4 = tail([]);
assertEqual(result4.length, 0);
assertEqual(result4[0], undefined);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);