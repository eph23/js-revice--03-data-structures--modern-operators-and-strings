'use strict';

const airline = 'Bangladesh Airlines';
const plane = 'A320';

// More String methods
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'epHraIM';
const passengerToLower = passenger.toLowerCase();
const passengerCorrect =
  passengerToLower[0].toUpperCase() + passengerToLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@ephraim.io';
const loginEmail = '      hello@ephRaiM.io';

const emailCorrected = loginEmail.trim().toLowerCase();

console.log(emailCorrected === email);

const priceGB = '288,97GBP';
const priceUS = priceGB.replace('GBP', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

const airPlane = 'Airbus A320neo';
console.log(airPlane.includes('A320'));
console.log(airPlane.includes('Boeing'));
console.log(airPlane.includes('Air'));

if (airPlane.startsWith('Airbus') && airPlane.endsWith('neo')) {
  console.log(`Part of the NEW Airbus family`);
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket KNIFE');
checkBaggage('Socks and camera');
checkBaggage('got some some snacks and a gun for protection');
