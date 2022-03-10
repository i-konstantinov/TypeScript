/// <reference path="module1.ts" />

let use = new Utility.Usefull();

console.log(use.timesTwo(9)); // expected 18

// in order to compile them together
// in the terminal type: tsc module1.ts module2.ts --out util.js