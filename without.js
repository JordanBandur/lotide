const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
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

const without = function(sourceArray, itemsToRemoveArray) {
  let filteredArray = sourceArray.filter((item) => {
    return !itemsToRemoveArray.includes(item);
  });
  return filteredArray;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);
assertArraysEqual(without(["hello", "world", "lighthouse", "labs"], ["labs"]), ["hello", "world", "lighthouse"]);
