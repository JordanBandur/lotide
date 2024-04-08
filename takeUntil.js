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

const takeUntil = function(array, callback) {
  const results = [];
  for(const item of array) {
    if(callback(item)) { // stop the loop if the callback condition is met
      break;
    }
    results.push(item);
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// Numbers with a different condition
const data3 = [10, 20, -1, 2, 3, 4];
const results3 = takeUntil(data3, x => x < 0);
assertArraysEqual(results3, [10, 20]); // Should pass

console.log('---');

// Testing with an array of mixed types
const data4 = [0, "string", true, false, "stop", 1, 2, 3];
const results4 = takeUntil(data4, x => typeof x === 'string');
assertArraysEqual(results4, [0]); // Should pass

console.log('---');

// Callback never returns true
const data5 = [1, 2, 3, 4, 5];
const results5 = takeUntil(data5, x => x > 10);
assertArraysEqual(results5, [1, 2, 3, 4, 5]); // Should pass, as callback never true

console.log('---');

// Callback returns true on the first element
const data6 = [-1, 1, 2, 3];
const results6 = takeUntil(data6, x => x < 0);
assertArraysEqual(results6, []); // Should pass, as the first element meets the condition

console.log('---');

// Empty array input
const data7 = [];
const results7 = takeUntil(data7, x => x < 0);
assertArraysEqual(results7, []); // Should pass, as the array is empty
