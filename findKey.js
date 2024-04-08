const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);

console.log("---");

// Looking for a restaurant with 3 stars
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 3
  ),
  "Akaleri"
);

console.log("---");

// No matching condition
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
    },
    (x) => x.stars === 4
  ),
  undefined
);

console.log("---");

// Key with undefined value
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Empty: undefined,
      noma: { stars: 2 },
    },
    (x) => x === undefined
  ),
  "Empty"
);
console.log("---");

// Key with a non-object value
assertEqual(
  findKey(
    {
      One: 1,
      Two: 2,
      Three: 3,
    },
    (x) => x === 2
  ),
  "Two"
);

console.log("---");

// Matching the first key in a condition with multiple matches
assertEqual(
  findKey(
    {
      First: { stars: 2 },
      Second: { stars: 2 },
      Third: { stars: 2 },
    },
    (x) => x.stars === 2
  ),
  "First"
);
