'use strict';

const phonebook = [{ name: 'Petro', phone: '+380982233223' },
  { name: 'Ivan', phone: '+380508800555' },
  { name: 'Vasyl', phone: '+380444212308' },
];

const findPhoneByName = (name) => {
  for (const usr of phonebook) {
    if (usr.name === name) return usr.phone;
  }
};

console.log(findPhoneByName('Ivan'));
module.exports = { phonebook, findPhoneByName };
