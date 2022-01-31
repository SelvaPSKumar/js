//Variables - Var,let,Const
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML =
    "The value of z is: " + z;

let a = 5;
let b = 6;
let c = a + b;
document.getElementById("demo1").innerHTML =
    "The value of c is: " + c;

let s = 10;
{
    let s = 2;
}
document.getElementById("demo2").innerHTML = s;

const price1 = 5;
const price2 = 6;
let total = price1 + price2;
document.getElementById("demo3").innerHTML =
    "The total is: " + total;

const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota";

cars.push("Audi");

document.getElementById("demo").innerHTML = cars;

//String
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

document.getElementById("demo5").innerHTML =
    answer1 + "<br>" + answer2 + "<br>" + answer3;

//len,slice,substring,substr,replace,Upper & Lower,concat,trim,padstart & End,charAt & codeAt,split
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo6").innerHTML = text.length;

let str = "Apple, Banana, Kiwi";
document.getElementById("demo7").innerHTML = str.slice(7, 13);

let srt = "Orange, Grape, Mango";
document.getElementById("demo8").innerHTML = srt.substring(8, 12);

let rts = "Pinapple, Lemon, Pappaya";
document.getElementById("demo9").innerHTML = rts.substr(8, 7);

function myFunction() {
    let msg = document.getElementById("demo10").innerHTML;
    document.getElementById("demo10").innerHTML =
        msg.replace("Microsoft", "W3Schools");
}

function myFunction() {
    let mssg = document.getElementById("demo11").innerHTML;
    document.getElementById("demo11").innerHTML =
        mssg.toUpperCase();
}

function myFunction1() {
    let texxt = document.getElementById("demo12").innerHTML;
    document.getElementById("demo12").innerHTML =
        texxt.toLowerCase();
}

let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ", text2);
document.getElementById("demo13").innerHTML = text3;

let text4 = "     Hello World!     ";
let text5 = text4.trim();

document.getElementById("demo14").innerHTML =
    "Length text4=" + text4.length + "<br>Length2 text5=" + text5.length;

let textt = "5";
document.getElementById("demo15").innerHTML = textt.padStart(4, 0);

let teext = "5";
document.getElementById("demo16").innerHTML = teext.padEnd(4, 0);

var ttext = "HELLO WORLD";
document.getElementById("demo17").innerHTML = ttext.charAt(0);

let mag = "HELLO WORLD";
document.getElementById("demo18").innerHTML = mag.charCodeAt(0);

let mag1 = "a,b,c,d,e,f";
const myArray = mag1.split(",");
document.getElementById("demo19").innerHTML = myArray[0];

//Numbers - toString,exPonential,toFixed,toPrecision,toValue,Number(),parseInt(),parseFloat()

let d = 123;
document.getElementById("demo20").innerHTML =
    d.toString() + "<br>" +
    (123).toString() + "<br>" +
    (100 + 23).toString();

let e = 9.656;
document.getElementById("demo21").innerHTML =
    e.toExponential() + "<br>" +
    e.toExponential(2) + "<br>" +
    e.toExponential(4) + "<br>" +
    e.toExponential(6);

let f = 9.656;
document.getElementById("demo22").innerHTML =
    f.toFixed(0) + "<br>" +
    f.toFixed(2) + "<br>" +
    f.toFixed(4) + "<br>" +
    f.toFixed(6);

let n = 9.656;
document.getElementById("demo23").innerHTML =
    n.toPrecision() + "<br>" +
    n.toPrecision(2) + "<br>" +
    n.toPrecision(4) + "<br>" +
    n.toPrecision(6);

let m = 123;
document.getElementById("demo24").innerHTML =
    m.valueOf() + "<br>" +
    (123).valueOf() + "<br>" +
    (100 + 23).valueOf();

let o = new Date("1970-01-01");
document.getElementById("demo25").innerHTML = Number(o);

let p = new Date("1970-01-02");
document.getElementById("demo26").innerHTML = Number(p);

document.getElementById("demo27").innerHTML =
    parseInt("-10") + "<br>" +
    parseInt("-10.33") + "<br>" +
    parseInt("10") + "<br>" +
    parseInt("10.33") + "<br>" +
    parseInt("10 6") + "<br>" +
    parseInt("10 years") + "<br>" +
    parseInt("years 10");

document.getElementById("demo28").innerHTML =
    parseFloat("10") + "<br>" +
    parseFloat("10.33") + "<br>" +
    parseFloat("10 6") + "<br>" +
    parseFloat("10 years") + "<br>" +
    parseFloat("years 10");

//Booleans - With Value,Without Value,Undefined,Null,Booleans with Operators and object

document.getElementById("demo29").innerHTML =
    "100 is " + Boolean(100) + "<br>" +
    "3.14 is " + Boolean(3.14) + "<br>" +
    "-15 is " + Boolean(-15) + "<br>" +
    "Any (not empty) string is " + Boolean("Hello") + "<br>" +
    "Even the string 'false' is " + Boolean('false') + "<br>" +
    "Any expression (except zero) is " + Boolean(1 + 7 + 3.14);

let q = 0;
document.getElementById("demo30").innerHTML = Boolean(q);

let r;
document.getElementById("demo31").innerHTML = Boolean(r);

let t = null;
document.getElementById("demo32").innerHTML = Boolean(t);

// u is a boolean
let u = false;

// v is an object
let v = new Boolean(false);

document.getElementById("demo33").innerHTML = typeof u + "<br>" + typeof v;

let xy = false;         // x is a boolean
let yz = new Boolean(false);  // y is an object
document.getElementById("demo34").innerHTML = (xy == yz);

const xx = new Boolean(false);
const yy = new Boolean(false);
document.getElementById("demo35").innerHTML = (xx === yy);

//Conditional - if, else, else if

if (new Date().getHours() < 18) {
    document.getElementById("demo36").innerHTML = "Good day!";
}

const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.getElementById("demo37").innerHTML = greeting;

const time = new Date().getHours();
let greet;
if (time < 10) {
    greet = "Good morning";
} else if (time < 20) {
    greet = "Good day";
} else {
    greet = "Good evening";
}
document.getElementById("demo38").innerHTML = greet;

//Loop - for, for in, for of, while

let nan = "";

for (let i = 0; i < 5; i++) {
    nan += "The number is " + i + "<br>";
}

document.getElementById("demo39").innerHTML = nan;

const person = { fname: "John", lname: "Doe", age: 25 };

let txxt = "";
for (let yy in person) {
    txxt += person[yy] + " ";
}

document.getElementById("demo40").innerHTML = txxt;

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let xxx in numbers) {
    txt += numbers[xxx] + "<br>";
}

document.getElementById("demo41").innerHTML = txt;

const numbrs = [45, 4, 9, 16, 25];

let txtt = "";
numbrs.forEach(myFunction2);
document.getElementById("demo42").innerHTML = txtt;

function myFunction2(value, index, array) {
    txtt += value + "<br>";
}

let language = "JavaScript";

let texttt = "";
for (let aa of language) {
    texttt += aa + "<br>";
}

document.getElementById("demo43").innerHTML = texttt;

const car = ["BMW", "Volvo", "Saab", "Ford"];

let ss = 0;
let bb = "";
for (; car[ss];) {
    bb += car[ss] + "<br>";
    ss++;
}

document.getElementById("demo44").innerHTML = bb;

//Objects

const persn = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// Display some data from the object:
document.getElementById("demo45").innerHTML =
    persn.firstName + " is " + persn.age + " years old.";

const persons = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("demo46").innerHTML = persons.fullName();

//Array - pop, push, shift, unshift, length, delete, concatenating

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo47").innerHTML = fruits;
fruits.pop();
document.getElementById("demo48").innerHTML = fruits;

const fruit = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo49").innerHTML = fruit;
fruit.push("Kiwi");
document.getElementById("demo50").innerHTML = fruit;

const frut = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo51").innerHTML = frut.shift();
document.getElementById("demo52").innerHTML = frut;

const frts = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo53").innerHTML = frts.unshift("Lemon");
document.getElementById("demo54").innerHTML = frts;

const fru = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo55").innerHTML = fru;
fru[fru.length] = "Kiwi";
document.getElementById("demo56").innerHTML = fru;

const ffrr = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo57").innerHTML =
"The first ffrr is: " + ffrr[0];

delete ffrr[0];

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

document.getElementById("demo58").innerHTML = myChildren;

//JSON

let tttx = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(tttx);
document.getElementById("demo59").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName