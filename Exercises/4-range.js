'use strict';

const range = (first, last) => {
  const arr = [];
  for (let i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
};
console.log(range(14, 27));
module.exports = { range };
