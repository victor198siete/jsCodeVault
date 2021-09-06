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

//107. Short Circuiting (&& and || Operators)

//Use any data type, Return any data type, short-circuiting
// OR Operator
console.log(3 || 'Victor');
console.log('' || 'Victor');
console.log(true || 0); //console.log(true);
console.log(undefined || null); //console.log(null);
console.log(undefined || 0 || '' || 'Hello' || 3 || 'Victor');  //console.log(0 || '' || 'Hello' || 3 || 'Victor');

//Practical example
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND Operator
console.log(0 && 'Victor');
console.log(7 && 'Victor');
console.log('Hello' && 23 && null && 'Victor');

//Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('Peperoni', 'Mushrooms');
}

restaurant.orderPizza && restaurant.orderPizza('Peperoni', 'Spinach');

//108. The Nullish Coalescing Operator (??)

const guests3 = restaurant.numGuests || 10;
console.log(guests3);

// Nullish: null and undefined (NOT 0 or '')
const guests4 = restaurant.numGuests ?? 10;
console.log(guests4);

//110. Looping Arrays: The for-of Loop

const fullMenu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu2);

for (const item of fullMenu2) console.log(item);

for (const item of fullMenu2.entries()) {
    console.log(item);
}

//fullMenu2.entries()
console.log([...fullMenu2.entries()]);

//starting menu from element 1
for (const item of fullMenu2.entries()) {
    console.log(`Item ${item[0] + 1} : is ${item[1]}`);
}

//using destructuring
for (const [i, el] of fullMenu2.entries()) {
    console.log(`${i + 1} : ${el}`);
}

//111. Enhanced Object Literals

const weekdaysOne = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const cubanOpeningHours = {
    [`day-${1+1}`]: {
        open: 12,
        close: 22,
    },
    [weekdaysOne[2]]: {
        open: 12,
        close: 22,
    },
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
};

const anotherRestaurant = {
    name: 'Another Classic Cuban',
    location: 'Galiano 21, Havana, Cuba',
    categories: ['Cuban', 'Local'],
    starterMenu: ['Vegetables Salad', 'Tamal', 'Tostones'],
    mainMenu: ['Pork Ribs', 'Fried chickpeas', 'Roast Beef Steak'],

    openingHours: cubanOpeningHours,
    //ES6 Enhanced Object Literals
    cubanOpeningHours,

    order (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery ({starterIndex = 1, mainIndex = 0, time = '22:00', address}) {
        console.log(`Order Received! ${this.starterMenu[starterIndex]} and
     ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
};

//112. Optional Chaining (?.)

if(anotherRestaurant.openingHours && anotherRestaurant.openingHours.mon)
console.log(anotherRestaurant.cubanOpeningHours.mon.open);

if(anotherRestaurant.openingHours.fri)
    console.log(anotherRestaurant.cubanOpeningHours.fri.open);

//Optional Chaining Operator (?/)
console.log(anotherRestaurant.cubanOpeningHours.mon?.open);
console.log(anotherRestaurant.cubanOpeningHours?.fri?.open);

const weekdaysTwo = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of weekdaysTwo) {
    // console.log(day);
    const open = anotherRestaurant.cubanOpeningHours[day]?.open ?? `closed`;
    console.log(`On ${day}, we open at ${open}! `);
}

//Methods
console.log(anotherRestaurant.order?.(0, 1) ?? `M does not exist!`);
console.log(anotherRestaurant.orderSoup?.(0, 1) ?? `Method does not exist!`);

//Arrays
const users = [{name: `Victor`, email:`hello@coderdad.com`}];
console.log(users[0]?.name ?? `Empty array!`);

//113. Looping Objects: Object Keys, Values, and Entries

//Property Names
const properties = Object.keys(cubanOpeningHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of Object.keys(cubanOpeningHours)) {
    openStr += ` ${day},`;
}
console.log(openStr);

//Property Values
const values = Object.values(cubanOpeningHours);
console.log(values);

//Entire Object
const entries = Object.entries(cubanOpeningHours);
console.log(entries);

//[key, value]!
for (const [key, {open, close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}!`);
}

//115. Sets

//Set can Mix Data Types!
const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Bread',
    'Pasta',
    'Pizza',
]);

console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Salad'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Bread');
// orderSet.clear();   Clear all the elements on the Set

console.log(orderSet);

for (const order of orderSet){
    console.log(order);
}

//Example

const staff = ['Waiter','Chef','Manager','Waiter','Chef','Waiter'];

const staffSet = [...new Set(staff)];
console.log(staffSet);
console.log(new Set(['Waiter','Chef','Manager','Waiter','Chef','Waiter']).size);
console.log(new Set('victormoreno').size);

//116. Maps: Fundamentals

const rest = new Map();
rest.set('name','Classico Italiano');
rest.set(1, 'Rome, Italy');
rest.set(2, 'Havana, Cuba');

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open',11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are close :(');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

let time = 21;    //open
time = 24;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
console.log(rest.delete(2));
//rest.clear()          Clear all the elements on the Map

const restArr = [1, 2];
rest.set(restArr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);
console.log(rest.get(restArr));




// Data needed for a later exercise
//const flights =
//  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
