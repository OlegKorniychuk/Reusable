'use strict';

const phonebook = { Petro: '+380982233223',
  Ivan: '+380508800555',
  Vasyl: '+380444212308'
};

const findPhoneByName = (name) => phonebook[name];

console.log(findPhoneByName('Vasyl'));
module.exports = { phonebook, findPhoneByName };
