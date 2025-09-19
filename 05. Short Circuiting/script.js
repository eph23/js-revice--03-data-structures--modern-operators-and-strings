'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Destructuring returned value
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring method parameters
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // Spreading method parameters
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Short Circuiting
// OR Operator (||) - Returns the first truthy value
console.log('---OR---');

console.log(3 || 'Ephraim');
console.log('' || 'Ephraim');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 20 || null);

restaurant.numGuests = 23;

const isThereGuests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(isThereGuests);

const guests = restaurant.numGuests || 10;
console.log(guests);

// AND Operator (&&) - Returns the first falsy value
console.log('---AND---');

console.log(0 && 'Ephraim');
console.log(7 && 'Ephraim');
console.log('Hello' && 23 && null && 'Ephraim');
console.log(undefined && 'Hello' && 23 && null && 'Ephraim');

if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Onions', 'Olives');
