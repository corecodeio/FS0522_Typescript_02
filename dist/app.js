"use strict";
// arrays
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
let fruits = [];
fruits.push('Apple');
let colors = {
    blue: '',
    white: '',
    red: '',
};
colors.blue = '#0000ff';
colors.white = '#000000';
colors.red = '#ff0000';
// colors.green = '#00ff00';
// console.log(colors);
var MyEnums;
(function (MyEnums) {
    MyEnums[MyEnums["ONE"] = 100] = "ONE";
    MyEnums[MyEnums["TWO"] = 5] = "TWO";
    MyEnums["THREE"] = "Up";
    MyEnums["FOUR"] = "hOLA!";
    MyEnums[MyEnums["SOMETHING"] = 0] = "SOMETHING";
})(MyEnums || (MyEnums = {}));
// console.log(MyEnums.TWO + MyEnums.THREE);
// console.log(MyEnums.ONE);
// console.log(MyEnums.TWO);
// console.log(MyEnums.THREE);
// console.log(MyEnums.FOUR);
// console.log(MyEnums.SOMETHING);
let tuple = [1, 2];
tuple[0] = 2;
tuple[1] = 3;
// tuple[2] = 4;
console.log(tuple);
let greeting = '';
greeting = 'hola';
greeting = 'hi';
// greeting = 'adios'; // error
// greeting = 'dczxdfzsdfzsdfasdf Ipsum'; // error
let p = new Person_1.Person('Yosef', 26, 'IT');
let p2 = new Person_1.Person('Yosef', 26, 'IT');
console.log(p.name);
console.log(p.getAge());
console.log(p.getDepartment());
let workingInfo = [];
p.addChief(p2);
//
