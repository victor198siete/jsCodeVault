'use strict';
/*93. Scoping Practice*/
function calcAge(birthYear) {
    const age = 2030 - birthYear;

    function printAge() {
        let output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true
            // Creating New Variable with the same name as outer scope's variable
            const firstName = 'Jonas';
            const str = `Oh you're a millenial, ${firstName}`;
            console.log(str);

            var add = function(a,b){
                return a + b;
            }
            // Reassigning outer scope's variable
            const output = `New Output!`;
        }
        //console.log(str);
        console.log(millenial);
        console.log(output);
        console.log(add(2, 3));
    }
    printAge();
    return age;
}

const firstName = 'Vic';
calcAge(1991);
//console.log(age);
//printAge();

/*95. Hoisting and TDZ Practice*/

// Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Vic';
let job = 'programmer';
const year = 1991;

// Functions

console.log(addDecl(2,3));
//console.log(addExp(2,3));
//console.log(addArrow(2,3));

function addDecl(a,b) {
    return a + b;
}

const addExp = function (a,b) {
    return a + b;
}

var addArrow = (a,b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShopingCar();
var numProducts = 10;

function deleteShopingCar() {
    console.log(`All products deleted!`)
}

var l = 1;
let m = 2;
const n = 3;

console.log(l === window.l);
console.log(m === window.m);
console.log(n === window.n);

/*97. The this Keyword Practice*/

console.log(this);
const calcAgeAgain = function(birthYear) {
        console.log(2030 - birthYear);
        console.log(this);
};
console.log(calcAgeAgain(1987));

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}
console.log(calcAgeArrow(1980));

const jonas = {
    year: 1987,
    calcAge: function (){
        console.log(this);
        console.log(2030 - this.year);
    },
};
jonas.calcAge();

const max = {
    year: 1990,
};

max.calAge = jonas.calcAge;
max.calAge();

// const f = jonas.calcAge;
// f();

/*98. Regular Function vs Arrow Functions*/

const vic = {
    firstName: `Victor`,
    year: 1987,
    calcAge: function () {
        console.log(this);
        console.log(2030 - this.year);

        /*SOLUTION ONE*/
        //const self = this; // self or that
        //const isMillenial = function () {
            //console.log(self.year >= 1981 && self.year <= 1996);
            //console.log(this.year >= 1981 && this.year <= 1996);
        //};

        /*SOLUTION TWO*/
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial();
    },
    // An arrow function as a method (Never Use It!!!)
    greet: () => {
         console.log(this);
        console.log(`Hey ${this.firstName}`);
    },

    greetF: function () {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
vic.greet();
vic.greetF();
vic.calcAge();

// Arguments Keyword (They only exist in regular functions)
const addExpAgain = function (a,b) {
    console.log(arguments);
    return a + b;
};
addExpAgain(3, 5);
addExpAgain(3, 5, 6, 8);

var addArrowAgain = (a, b) => {
    console.log(arguments);
    return a + b;
};
//addArrowAgain(3,5);

/*99. Primitive vs Objects*/

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const meTwo = {
    name:'Jonas',
    age:30,
};
const friend = meTwo;
friend.name = 'Max';
friend.age = 27;
console.log('Me:', meTwo);
console.log('Friend:', friend);

/*100. Primitive vs Objects in Practice*/

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(marriedJessica, jessica);

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice','Bob'],
};

const jessicaCopy = Object.assign({},jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica2, jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2, jessicaCopy);

