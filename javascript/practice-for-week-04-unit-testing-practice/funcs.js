function isFive(num) {
  // Your code here
  return num === 5;
}

function isOdd(number) {
  // Your code here
  if (typeof number != 'number') {
    throw TypeError("Must pass in a number.");
  }
  
  return Math.abs(number % 2) === 1;
}

function myRange(min, max, step = 1) {
  // Your code here
  
  if (step === undefined) {
    step = 1;
  }

  let ret = [];
  for (let i = min; i <= max; i += step) {
      ret.push(i);
  } 
  
  return ret;
}


module.exports = { isFive, isOdd, myRange };