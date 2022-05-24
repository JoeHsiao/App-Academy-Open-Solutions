module.exports = function reverseString(str) {
  // Your code here
  if (typeof str != 'string') {
    throw TypeError('must be a string');
  }
  return str.split('').reverse().join('');
};