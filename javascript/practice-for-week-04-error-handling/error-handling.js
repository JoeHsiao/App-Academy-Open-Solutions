// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
  let res = sum(null);
} catch (error) {
  if (error instanceof TypeError) {
    console.error(error.name, error.message);
  }
}

// 2.
// tests
try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.error(error.message);
}
// Your code here
function sayName(arg) {
  if (typeof arg != 'string') {
    throw TypeError("Invalid name! Must be a string!");
  }
  console.log(arg);
}
// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet();
} catch {
  console.log("Hello World!");
}
