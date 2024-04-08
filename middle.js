const middle = function(arr) {
  let midArray = [];
  let index;
  if (arr.length < 3) {
    return midArray;
  } else {
    if (arr.length % 2 !== 0) {
      index = Math.floor((arr.length / 2));
      midArray.push(arr[index]);
      return midArray;
    } else {
      index = ((arr.length / 2) - 1);
      midArray.push(arr[index], arr[index + 1]);
      return midArray;
    }
  }
};

module.exports = middle;