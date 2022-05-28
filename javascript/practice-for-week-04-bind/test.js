// Your code here
const Employee = require('./employee');

let a = new Employee('John Wick', 'Dog Lover');


setTimeout(a.sayName.bind(a), 2000);
