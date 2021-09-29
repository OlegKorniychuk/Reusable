'use strict';

const rangeOdd = (first, last) => {
  const arr = [];
  for (let i = first; i <= last; i++) {
    i % 2 !== 0 ? arr.push(i) : null;
  }
  return arr;
};
console.log(rangeOdd(19, 30));

module.exports = { rangeOdd };
