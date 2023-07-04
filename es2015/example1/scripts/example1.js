// Example of how in es2015 the use of declarative scope and block scope.
// while let is block scope var is declarative
// output becomes
// 10
// 20
// 10
// 2
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a);
    console.log(b_1);
}
console.log(a);
console.log(b);
//# sourceMappingURL=example1.js.map