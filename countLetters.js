const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const countObj = {};
  const trimmedSentence = sentence.replace(/ /g,''); // regex for removing spaces in the sentence
  for (let letter of trimmedSentence) {
    if (countObj[letter]) {
      countObj[letter] += 1;
    } else {
      countObj[letter] = 1;
    }
  }
  return countObj;
};

const letterCounts = countLetters("lighthouse in the house");

// Perform tests on specific letters
assertEqual(letterCounts["l"], 1); // Expect 1 instance of 'l'
assertEqual(letterCounts["i"], 2); // Expect 2 instances of 'i'
assertEqual(letterCounts["g"], 1); // Expect 1 instance of 'g'
assertEqual(letterCounts["h"], 4); // Expect 4 instances of 'h'
assertEqual(letterCounts["t"], 2); // Expect 2 instances of 't'
assertEqual(letterCounts["o"], 2); // Expect 2 instances of 'o'
assertEqual(letterCounts["u"], 2); // Expect 2 instances of 'u'
assertEqual(letterCounts["s"], 2); // Expect 2 instances of 's'
assertEqual(letterCounts["e"], 3); // Expect 3 instances of 'e'
assertEqual(letterCounts["n"], 1); // Expect 1 instance of 'n'

// Test a letter not in the sentence
assertEqual(letterCounts["z"], undefined);