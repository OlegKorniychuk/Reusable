'use strict';

const createUser = (name, city) => ({ name, city });
console.log(createUser('Oleg', 'Zhytomir'));
module.exports = { createUser };
