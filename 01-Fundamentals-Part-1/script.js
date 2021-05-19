/*VALUES AND VARIABLES*/

//variables declaration
let firstName = 'Jonas';
console.log(firstName);

let myFirstJob = 'Programmer';
let mySecondJob = 'Teacher';
console.log(myFirstJob, mySecondJob);

/*DATA TYPES*/

let jsIsFun = true;
console.log(typeof jsIsFun);

jsIsFun = 'Yes!';
console.log(jsIsFun);
console.log(typeof jsIsFun);

/*LET,CONST AND VAR*/

let age = 31;
age =32;
const birthYear = 1987;
console.log(birthYear + age);

//old way to declare variables
//var job = 'teacher';
job = 'coder';
console.log(job);

//never declare a variable like this
lastName = "Schmedtmann";
console.log(lastName);

/*BASIC OPERATORS*/

//math operators
const now = 2021;
const ageJonas = now - 1991;
const ageVic = now - 1987;

console.log(ageJonas, ageVic);
console.log(ageJonas * 2, ageVic / 10, 2**3);

const firstNameVic = 'Vic';
const lastNameVic = 'Moreno';
console.log(firstNameVic + ' ' + lastNameVic);

//assignments operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

//comparison operators
console.log(ageJonas > ageVic); // >, <, >=, <=, ===
const isFullAge = ageVic >= 18;

console.log(isFullAge);
console.log(now - 1991 < now - 1987);

/*OPERATOR PRECEDENCE*/

let a, b;
a = b = 25 -10 -5;
console.log(a, b);

/*STRINGS AND TEMPLATE LITERALS*/

const firstNameNaia = 'Naia';
const jobNaia = 'been a baby';
const birthYearNaia = '2015';
const year = 2021;

const naia = "I'm " + firstNameNaia + ", a " + (year - birthYearNaia) + " years old " + jobNaia;
console.log(naia);

const naiaNew = `I'm ${firstNameNaia}, a ${year - birthYearNaia} years old ${jobNaia}`;
console.log(naiaNew);

console.log('String with \n\
multiple\n\
lines!');

console.log(`String with
multiple
lines!`);

/*TAKING DECISIONS: IF / ELSE STATEMENTS */
const ageBrian = 15;
const isOldEnough = ageBrian >= 18;

if(isOldEnough){
    console.log(`Brian can start driving license 🚗`);
} else {
    const yearsLeft = 18 - ageBrian;
    console.log(`Brian is too young, wait another ${yearsLeft} years 😅`)
}

const birthYearBrian = 2005;
let century;

if (birthYearBrian < 2000){
   century = 20;
} else {
    century = 21;
}
console.log(`Brian born in the ${century} century`);

/*TYPE CONVERSION AND COERCION*/

//type conversion
const inputYear = '1993';
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(String(23),23);

//type coersion
console.log(`I'm ` + 33 + ` years old`)
console.log('33'-10-`3`);
console.log('33'/`3`);
console.log('33'>`3`);

let n = '1' + 1;
n = n - 1;
console.log(n);

/*TRUTHY AND FALSY VALUES*/

//5 false values: 0, '', undefined, null, Nan
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Vic'));
console.log(Boolean({}));
console.log(Boolean(''));

const money =0;
if(money){
    console.log(`Don't spend it all!`)
} else {
    console.log(`Yoy should get a Job!`)
}

let high;
if(high){
    console.log(`YAY high is Defined!`)
} else {
    console.log(`High is Undefined!`)
}

/*EQUALITY OPERATORS*/

const yourAge = 18;
if(yourAge === 18){
    console.log(`You just became an adult (strict)`);
}
if(yourAge == '18'){
    console.log(`You just became an adult (loose)`);
}

const favourite = Number(prompt(`What's your favorite number:`));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
    console.log(`Cool 23 is an Amazing number!`);
} else if(favourite === 7) {
    console.log(`Cool 7 is also an Amazing number!`);
} else {
    console.log(`The number is not 7 or 23!`);
}

if(favourite !== 23) {
console.log(`Why not 23!?`);
}

/*BOOLEAN LOGIC*/
let exampleAge = 23;
let exampleA = exampleAge >=30;
let exampleB = exampleAge < 25;

console.log(!exampleA);
console.log(exampleA && exampleB);
console.log(exampleA || exampleB);
console.log(!exampleA && exampleB);
console.log(exampleA || !exampleB);

/*LOGICAL OPERATORS*/

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Naia is able to drive!`);
} else {
    console.log(`Someone else should drive...!`);
}

/*THE SWITCH STATEMENT*/

const day = `monday`;

switch (day) {
    case "monday": // day === 'monday'
        console.log(`Plan course structure!`);
        console.log(`Go to coding meetup`);
        break;
    case "tuesday":
        console.log(`Prepare theory videos!`);
        break;
    case "wednesday":
    case "thursday":
        console.log(`Write code examples!`);
        break;
    case "friday":
        console.log(`Record videos!`);
        break;
    case "saturday":
    case "sunday":
        console.log(`Enjoy the weekend!`);
        break;
    default:
        console.log(`Not a valid day!`);
}

/*STATEMENTS AND EXPRESSIONS*/
//expressions produce values & statements are full sentences that translate our actions

/*THE CONDITIONAL TERNARY OPERATOR*/

const exampleNumber = 23;
exampleNumber >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`);

const drink = exampleNumber >= 18 ? `wine 🍷` : `water 💧`;
console.log(drink);

/**********************************/
/*ASSIGNMENTS JS FUNDAMENTALS ONE*/
/********************************/

const country = 'Cuba';
const continent = 'America';
let population = 11000000;

console.log(country, continent, population);

const isIsland = true;
const language = 'Spanish';

console.log(language);
console.log(typeof isIsland, typeof population, typeof  country, typeof language);

//isIsland = false;

let populationHalfOne = population/2;
let populationHalfTwo = population/2;
console.log(populationHalfOne, populationHalfTwo);

console.log(population++);

let populationOfFinland = 6000000;
console.log(population > populationOfFinland);
console.log(population > 33000000);

let description = country + ' is in ' + continent + ', and its ' + population + ' people speak '+ language;
console.log(description);
