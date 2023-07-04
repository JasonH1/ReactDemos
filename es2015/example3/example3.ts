// Simple examples of using let and const

// use const when we are not reassign the variables
const PI = 3.14;
const MAX_SIZE = 100;
// use let when we expect to reassign the variable at a later point
let a = 5;
let b = 10;
a = a+b;

// Simple example of arrow functions

// Normal function
var getFunc = function() {
    return 10;
};
console.log(getFunc());

// Arrow function full
const getArrowValue = () => {
    return 11;
}
console.log(getArrowValue());

// Arrow function simple
const getArrowValue2 = () => 12;
console.log(getArrowValue2());

// Final output 10,11,12