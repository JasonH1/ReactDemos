// Simple examples of using let and const
// use const when we are not reassign the variables
var PI = 3.14;
var MAX_SIZE = 100;
// use let when we expect to reassign the variable at a later point
var a = 5;
var b = 10;
a = a + b;
// Simple example of arrow functions
// Normal function
var getFunc = function () {
    return 10;
};
console.log(getFunc());
// Arrow function full
var getArrowValue = function () {
    return 11;
};
console.log(getArrowValue());
// Arrow function simple
var getArrowValue2 = function () { return 12; };
console.log(getArrowValue2());
// Final output 10,11,12
//# sourceMappingURL=example3.js.map