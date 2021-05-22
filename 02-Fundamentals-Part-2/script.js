/*ACTIVATING STRICT MODE*/
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

if (hasDriversLicense) {
    console.log(`I can drive :D`);
}

// const interface = 'Audio'
// const private = 234

/*FUNCTIONS*/

function logger() {
    console.log('My name is Vic');
}

//calling, running or invoking function

logger();
logger();

/* comment for use it in other lecture
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    return `Juice with ${apples} apples and with ${oranges} oranges.`;
}*/

const makingJuice = fruitProcessor(5,3);
const makingJuiceAgain = fruitProcessor(4,4);
console.log(makingJuice);
console.log(makingJuiceAgain);

/*FUNCTIONS DECLARATIONS VS EXPRESSIONS*/

// function declaration

/* comment for use it in other lecture
function calcAge1(birthYear) {
    return 2030 - birthYear;
}
const age1 = calcAge1(1987);
console.log(age1);
*/

// function expression

const calcAge2 = function (birthYear) {
    return 2030 - birthYear;
}
const age2 = calcAge2(1987);
console.log(age2);

/*ARROW FUNCTIONS*/

const calcAge3 = BirthYear => 2030 - BirthYear;
const age3 = calcAge3(1987);
console.log(age3);

/* comment for use it in other lecture
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2030 - birthYear;
    return `${firstName} retires in ${65 - age} years!`;
}
const age4 = yearsUntilRetirement(1987, `Moreno`);
console.log(age4);*/

/*FUNCTIONS CALLING OTHER FUNCTIONS*/

function cutFruitIntoPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitIntoPieces(apples);
    const orangePieces = cutFruitIntoPieces(oranges);
    console.log(apples, oranges);
    return `Juice with ${applePieces} apples and with ${orangePieces} oranges.`;
}
const fruitFlow = fruitProcessor(2,3);
console.log(fruitFlow);

/*REVIEWING FUNCTIONS*/

const calcAgeFunctionValue = function(birthYear) {
    return 2030 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAgeFunctionValue(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${65 - age} years ⏳`);
        return retirement;
    } else {
        console.log(`${firstName} is already retired 🍕`);
        return -1;
    }
    // return
}
console.log(yearsUntilRetirement(1987, `Moreno`));
console.log(yearsUntilRetirement(1940, `Moreno`));

/*ARRAYS*/

const friends = ['Michael', 'Steve', 'Peter'];
console.log(friends);

//const years = new Array(1987, 1990, 2002, 2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);

const jonas = ['Jonas', 'Moreno', 2030 - 1987, 'programmer'];
console.log(jonas);

// Array Exercise
function calcAge(birthYear) {
    return 2030 - birthYear;
}
const years = [1987, 1990, 2002, 2020];
const age01 = calcAge(years[0]);
const age02 = calcAge(years[1]);
const age03 = calcAge(years[2]);
const age04 = calcAge(years[years.length - 1]);
console.log(age01, age02, age03, age04)

const ages = [age01, age2, age03, age04];
console.log(ages);

/*BASIC ARRAY OPERATIONS (METHODS)*/

// Add methods - push, unshift
const bros = ['Michael','Steven','Peter'];
const newLength = bros.push('Jay');
console.log(bros);
console.log(newLength);

bros.unshift('John');
console.log(bros);

// Remove methods

bros.pop(); //last
const popped = bros.pop();
console.log(popped);
console.log(bros);

bros.shift(); //First
console.log(bros);

console.log(bros.indexOf('Steven'));
console.log(bros.indexOf('Bob'));

bros.push(23);
console.log(bros.includes('Steven'));
console.log(bros.includes('Bob'));
console.log(bros.includes(23));

if (bros.includes('Steven')) {
    console.log('Steven is your Bro!');
}

/*INTRODUCTION TO OBJECTS*/

const vic = {
    firstName: 'Victor',
    lastName: 'Moreno',
    vicAge: 2030 - 1987,
    job: 'developer',
    friends: ['Ale','Yosbe','Nesty']
}
console.log(vic);

/*DOT VS. BRACKET NOTATION*/

// dot notation
console.log(vic.firstName);
console.log(vic['lastName']);

//bracket notation
const nameKey = 'Name';
console.log(vic['first' + nameKey]);
console.log(vic['last' + nameKey]);

const interestedIn = prompt(`What do you want to know about Victor, firstName,
lastName, vicAge, job, friends`);
console.log(interestedIn);
console.log(vic[interestedIn]);

if (vic[interestedIn]) {
    console.log(vic[interestedIn]);
} else {
    console.log('Wrong request!')
}

vic.location = 'Mexico';
vic['twitter'] = '@victor198siete';
console.log(vic);

// Challenge
// Write the sentence:
// Jonas has 3 friends and his best friend is Michael!

console.log(`${vic.firstName} has ${vic.friends.length} friends and his best friend is ${vic.friends[0]}!`);

/*OBJECTS METHODS*/

const nara = {
    firstName: 'Nara',
    lastName: 'Cabrales',
    birthYear: 1993,
    job: 'seller',
    hasDriversLicense: true,
    friends: ['Ale','Avy','Claudia'],

    // function value
    /*calcAge: function (birtYear) {
        return 2030 - birtYear;
    }
    calcAge: function () {
        return 2030 - this.birthYear;
    }*/
    calcAge: function () {
        return this.age = 2030 - this.birthYear;
    },
    getSummary: function () {
    const hasLicense = this.hasDriversLicense === true ? 'has' : 'has not';
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he/she ${hasLicense} a driver license`;
}
};
console.log(nara);

/*console.log(nara.calcAge(1993));
console.log(nara['calcAge'](1993));*/

console.log(nara.calcAge());
console.log(nara.age);

// Challenge
// Write a method called getSummary:
// Jonas is a 46 year teacher and he have a driver license!

/*function getSummary (person) {
    const hasDriverLicense = person.hasDriversLicense === true ? 'has' : 'has not';
    console.log(`${person.firstName} is a ${person.age} years old ${person.job}
    and he/she ${hasDriverLicense} a driver license`);
}*/

console.log(nara.getSummary());

/*ITERATION: THE FOR LOOP*/

console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

/*LOOPING ARRAYS, BREAKING AND CONTINUING*/

const naia = [
    'Naia', 'Moreno', 2021 - 2015, 'baby', ['AXL','IAN','AINOA'], false
];

const types = [];
for (let i = 0;i < naia.length; i++) {
    console.log(naia[i], typeof naia[i]);
    types.push(typeof naia[i]);
}
console.log(types);

const yearsArray = [1987, 1990, 1993, 2002, 2015];
const agesArray = [];
for (let i =0; i < yearsArray.length; i++) {
    agesArray.push(2021 - yearsArray[i]);
}
console.log(agesArray);

// continue and break
// only strings
for (let i = 0; i < naia.length; i++) {
    if (typeof naia[i] !== "string") continue;
    console.log(naia[i], typeof naia[i]);
}

// break with the first number
for (let i = 0; i < naia.length; i++) {
    if (typeof naia[i] !== "number") break;
    console.log(naia[i], typeof naia[i]);
}

/*LOOPING BACKWARDS AND LOOPS IN LOOPS*/

const victor = [
    'Victor',
    'Moreno',
    2021-1987,
    'developer',
    ['Ale','Yosbe','Nesty'],
    true
]
// 0, 1, ... 4
// 4, 3 ... 0

for (let i = victor.length -1; i >= 0; i--) {
    console.log(i, victor[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----------Starting exercise ${exercise}`);

    for (let rep = 1; rep <= 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

/*THE WHILE LOOP*/
let rep = 1;
while (rep <= 10) {
    console.log(`While: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Loop is about to end...`);
    }
}

