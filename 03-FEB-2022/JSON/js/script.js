const obje = { name: "John", age: function () { return 30; }, city: "New York" };
obje.age = obje.age.toString();
const myJSON = JSON.stringify(obje);
document.getElementById("demo1").innerHTML = myJSON;

const obj1 = { name: "John", age: function () { return 30; }, city: "New York" };
const myJSON1 = JSON.stringify(obj1);
document.getElementById("demo2").innerHTML = myJSON1;

const obj2 = { name: "John", today: new Date(), city: "New York" };
const myJSON2 = JSON.stringify(obj2);
document.getElementById("demo3").innerHTML = myJSON2;

// Storing data:
const myObjec = { name: "John", age: 31, city: "New York" };
const myJSON3 = JSON.stringify(myObjec);
localStorage.setItem("testJSON", myJSON3);

// Retrieving data:
let store = localStorage.getItem("testJSON");
let objec = JSON.parse(store);
document.getElementById("demo4").innerHTML = objec.name;

const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON4 = JSON.stringify(arr);
document.getElementById("demo5").innerHTML = myJSON4;

const objec1 = { name: "John", age: 30, city: "New York" };
const myJSON5 = JSON.stringify(objec1);
document.getElementById("demo6").innerHTML = myJSON5;

const store1 = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
const objec2 = JSON.parse(store1);
objec2.age = eval("(" + objec2.age + ")");
document.getElementById("demo7").innerHTML = objec2.name + ", " + objec2.age();

const store2 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const objec3 = JSON.parse(store2);
objec3.birth = new Date(objec3.birth);
document.getElementById("demo8").innerHTML = objec3.name + ", " + objec3.birth;

const store3 = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(store3);
document.getElementById("demo9").innerHTML = myArr[0];

const storage = '{"name":"John", "age":30, "city":"New York"}'
const objec4 = JSON.parse(storage);
document.getElementById("demo10").innerHTML = objec4.name + ", " + objec4.age;

let store4 = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

const objec5 = JSON.parse(store4);
document.getElementById("demo11").innerHTML =
    objec5.employees[1].firstName + " " + objec5.employees[1].lastName;