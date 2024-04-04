const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // Expected to pass

// Test 2: Capitalizing each word in the array
const capitalizeWords = map(words, word => word.toUpperCase());
assertArraysEqual(capitalizeWords, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]); 

// Test 3: Getting the length of each word
const wordLengths = map(words, word => word.length);
assertArraysEqual(wordLengths, [6, 7, 2, 5, 3]); 

// Test 4: Appending "!" to each word
const exclaimWords = map(words, word => word + "!");
assertArraysEqual(exclaimWords, ["ground!", "control!", "to!", "major!", "tom!"]); 


