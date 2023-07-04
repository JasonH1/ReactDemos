// outputs 1,2,3,4,5
for (var i=1; i<=5; i++) {
    console.log(i);
}
// outputs 6,6,6,6,6 because passing reference to i 
// and not the value inside each loop, how to solve in next example 
for (var i=1; i<=5; i++) {
    setTimeout(function(){console.log(i)}, 1000);
}
// to solve this error we can use let
for (let i=1; i<=5; i++) {
    setTimeout(function(){console.log(i)}, 1000);
}
