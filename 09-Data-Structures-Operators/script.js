'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '22:00', address}) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and
     ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
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

  orderPizza: function(mainIngredient, ...otherIngredients)  {
      console.log(mainIngredient);
      console.log(otherIngredients);
  }
};

//103. Destructuring Arrays
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;

console.log(a,b,c);
console.log(x,y,z);
console.log(arr);

const [first, ,second] = restaurant.categories;
console.log(first, second);

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variables Values Using Temp Variable
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

//Switching Variables Values Using Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log([starter, mainCourse]);

//Nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j,k]] =nested;
console.log(i,j,k);

//Default Values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);

//104. Destructuring Objects

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating Variables
let var1 = 111;
let var2 = 999;
const obj = {var1: 23, var2: 7, var3: 14};
({var1, var2} = obj);
console.log(var1, var2);

//Nested Objects
const {fri: {open: openFri, close: closeFri},} = openingHours;
console.log(openFri, closeFri);

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: '2',
    starterIndex: '2',
});

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
});

//105. The Spread Operator (...)

const arrOne = [7, 8, 9];
const badNewArr = [1, 2, arrOne[0], arrOne[1], arrOne[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arrOne];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 arrays
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

//Iterables: arrays, strings, maps, sets. Not Objects!!!
const str = 'Victor';
const letters = [...str, '', 'M.'];
console.log(letters);

//Real World example using the spread operator
const ingArray = [
    prompt('Let\'s make pasta! Ingredient 1?'),
    prompt('Ingredient 2?'),
    prompt('Ingredient 3?')]

restaurant.orderPasta(ingArray[0], ingArray[1], ingArray[2]);
restaurant.orderPasta(...ingArray);

//Objects
const newRestaurant = {...restaurant, foundedIn: 1902, founder: 'Giuseppe Garibaldi'};
console.log(newRestaurant);

const restaurantCopy = {...newRestaurant};
restaurantCopy.name = 'Rome Empire';
console.log(restaurantCopy.name);
console.log(newRestaurant.name);

//106. Rest Pattern and Parameters

// 1 Part - Destructuring

//Spread, because on right side of =
const arrEx = [1, 2, ...[3, 4, 5]];

//Rest, because on left side of =
const [l, m,...others] = [1, 2, 3, 4, 5];
console.log(l, m, others);

const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2 Part - Functions
const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const ex = [23, 5, 7];
add(...ex);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');



// Data needed for a later exercise
//const flights =
//  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
