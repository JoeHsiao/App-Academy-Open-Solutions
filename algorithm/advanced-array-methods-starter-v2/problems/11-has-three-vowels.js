/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/
function hasThreeVowels(str) {
    let uniqueVowlCount = function(pre, cur) {
        const vowls = "aeiouAEIOU";
        if (vowls.includes(cur)) {
            pre.add(cur);
        }
        return pre;
    }

    if ([...str].reduce(uniqueVowlCount, new Set()).size >= 3) {
        return true;
    }
    return false;
}

// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
