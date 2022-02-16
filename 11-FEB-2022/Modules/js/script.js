// script.js

function add(a, b) {
    return a + b;
   };
   console.log(add(5, 5)); //outputs 10

import add from './maths.js';

console.log(add(2, 5)); //outputs 7

import { multiply, subtract } from './maths.js';

console.log(multiply(5, 5));

console.log(subtract(10, 4))

import add, { subtract as substractNumbers } from './maths.js';

console.log(substractNumbers(2, 5)); 

import add, { multiply, subtract } from './maths.js';

console.log(multiply(5, 5));

console.log(subtract(10, 4))

console.log(add(10, 10));