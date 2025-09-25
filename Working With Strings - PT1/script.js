'use strict';

const airline = 'Bangladesh Airlines';
const plane = 'A320';

// Accessing string value
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

// String property
console.log(airline.length);
console.log('B737'.length);

// String methods
console.log(airline.indexOf('r'));
console.log(airline.indexOf('b'));
console.log(airline.indexOf('B'));
console.log(airline.indexOf('Bangladesh'));

console.log(airline.slice(0));
console.log(airline.slice(0, 10));
console.log(airline.indexOf(' '));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(5, -2));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`You got middle seat... `);
  } else {
    console.log(`You got lucky`);
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(typeof new String('ephraim'));
console.log(typeof new String('ephraim').slice(1));
