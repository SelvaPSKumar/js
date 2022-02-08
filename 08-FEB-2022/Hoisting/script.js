x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;           // Display x in the element

var x; // Declare x

var x; // Declare x
x = 25; // Assign 25 to x

elem = document.getElementById("demo1"); // Find an element 
elem.innerHTML = x;           // Display x in the element

try {
  carName = "Saab";
  let carName = "Volvo";
}
catch (err) {
  document.getElementById("demo2").innerHTML = err;
}

carName = "Volvo";
//const carName;
document.getElementById("demo3").innerHTML = carName;

var x = 5; // Initialize x
var y = 7; // Initialize y

elem = document.getElementById("demo4"); // Find an element 
elem.innerHTML = x + " " + y;       // Display x and y

var x = 25;  // Initialize x

elem = document.getElementById("demo5");      // Find an element 
elem.innerHTML = "x is " + x + " and y is " + y;  // Display x and y

var y = 7;  // Initialize y

// Variable lifecycle
let a;        // Declaration
a = 100;      // Assignment
console.log(a);  // Usage


// hoisting
function codeHoist() {
  a = 10;
  let b = 50;
}
codeHoist();

console.log(a); // 10
console.log(b); // ReferenceError : b is not defined

// var code (global)
console.log(name); // undefined
var name = 'Selva Pandi';

//how interpreter sees the above code
var name;
console.log(names); // undefined
names = 'Selva Pandi';

//function scoped
function fun() {
  console.log(nam);
  var nam = 'Selva Pandi';
}
fun(); // undefined

//function scoped
function func() {
  var name1;
  console.log(name1);
  name1 = 'Selva Pandi';
}
fun(); // undefined

//in order to avoid it
function funct() {
  var name2 = 'Selva Pandi';
  console.log(name2); // Selva Pandi
}
funct();

//let example(global)
console.log(nam2);
let nam2 = 'Selva Pandi'; // ReferencError: name is not defined
