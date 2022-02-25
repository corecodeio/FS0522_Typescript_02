// arrays

import { Person } from './Person';
import { WorkInfo } from './WorkInfo';

let fruits: string[] = [];
fruits.push('Apple');
// object ({})

// let colors: {} = {};

// colors = new Number(22);

// colors = [];

//let colors = {};

// General
// let colors: { [n: string]: string } = {};

// Especifica
type Cmyolors = { blue: string; white: string; red: string };
let colors: Cmyolors = {
  blue: '',
  white: '',
  red: '',
};

colors.blue = '#0000ff';
colors.white = '#000000';
colors.red = '#ff0000';
// colors.green = '#00ff00';

// console.log(colors);

enum MyEnums {
  ONE = 100,
  TWO = 5,
  THREE = 'Up',
  FOUR = 'hOLA!',
  SOMETHING = 0,
}

// console.log(MyEnums.TWO + MyEnums.THREE);
// console.log(MyEnums.ONE);
// console.log(MyEnums.TWO);
// console.log(MyEnums.THREE);
// console.log(MyEnums.FOUR);
// console.log(MyEnums.SOMETHING);

let tuple: [number, number] = [1, 2];

tuple[0] = 2;
tuple[1] = 3;
// tuple[2] = 4;
console.log(tuple);

// Literal types
type theOnlyGreetings = 'hola' | 'hi' | '';

let greeting: theOnlyGreetings = '';

greeting = 'hola';
greeting = 'hi';
// greeting = 'adios'; // error
// greeting = 'dczxdfzsdfzsdfasdf Ipsum'; // error

let p = new Person('Yosef', 26, 'IT');
let p2 = new Person('Yosef', 26, 'IT');

console.log(p.name);
console.log(p.getAge());
console.log(p.getDepartment());

let workingInfo: WorkInfo[] = [];

p.addChief(p2);

//
