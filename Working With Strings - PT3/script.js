'use strict';

// More string methods
console.log('a+very+nice+string'.split('+'));
console.log('Ephraim S');

const [firstName, lastName] = 'Ephraim Sangma'.split(' ');
console.log(firstName);
console.log(lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (inputName) {
  const splittedNames = inputName.split(' ');

  let capitalizedSplits = [];

  for (const name of splittedNames) {
    capitalizedSplits.push(name[0].toUpperCase() + name.slice(1));
  }

  console.log(capitalizedSplits.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('ephraim sangma');
capitalizeName('john doe');

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log(message.padStart(25, '+').padEnd(40, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  console.log(str.slice(-4).padStart(str.length, '*'));
};
maskCreditCard(4564564132118616);
maskCreditCard('555656455632118616');

const billboardMessage = 'Bad weather... All departures delayed...';
console.log(billboardMessage.repeat(5));

const planesInLine = function (num) {
  console.log(`There are ${num} planes in the line ${'✈️'.repeat(num)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
