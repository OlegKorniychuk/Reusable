'use strict';

const fn = () => {
  const obj1 = { name: 'Oleg' };
  let obj2 = { name: 'Ivan' };
  obj1.name = 'Gigilo';
  obj2.name = 'Mudrilo';
  obj2 = { fruit: 'pineaple' };
};

fn();
module.exports = { fn };
