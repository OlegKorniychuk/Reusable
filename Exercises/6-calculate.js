'use strict';

const square = (a) => a * a;

const cube = (a) => a ** 3;

const average = (a, b) => {
  const c = (a + b) / 2;
  return c;
};

const calculate = () => {
  const arr = [];
  for (let i = 0; i <= 9; i++) {
    const a = square(i);
    const b = cube(i);
    const c = average(a, b);
    arr.push(c);
  }
  return arr;
};

console.log(calculate());

module.exports = { square, cube, average, calculate };
