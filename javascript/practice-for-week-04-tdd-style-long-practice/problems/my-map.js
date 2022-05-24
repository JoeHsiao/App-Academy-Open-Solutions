function myMap(inputArray, callback) {
  // Your code here
  let res = [];
  for (let i = 0; i < inputArray.length; i++) {
    res.push(callback(inputArray[i]));
  }
  return res;
}

module.exports = myMap;