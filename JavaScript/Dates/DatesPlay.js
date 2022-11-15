var d = new Date();
console.log(d);

var d = new Date("11/25/2022");
console.log(d);

var d = new Date(2022,10,26);  // note month is a zero based array jan is 0
console.log(d);

var d = new Date(2022,12,26);  // month over 12[11] will just go into the next year...
console.log(d);

// date is stored as mmilliseconds past Jan 1 1970.. why?
var d = new Date(100000000000);  // note month is a zero based array jan is 0
console.log(d);

console.log(d.toString()); //ok

console.log(d.toUTCString()); //ok
