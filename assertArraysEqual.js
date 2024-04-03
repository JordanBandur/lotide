const assertArraysEqual = function(arr1, arr2) {
  let match = true;
  if (arr1.length !== arr2.length) {
    console.log(`🛑 Array 1 & Array 2 are different lengths\n`);
    match = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Array 1: ${arr1} \nArray 2: ${arr2} \n🛑 no match\n`);
        match = false;
      }
    }
  }
  if (match) {
    console.log(`Array 1: ${arr1} \nArray 2: ${arr2} \n✅ match\n`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // no match

assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
