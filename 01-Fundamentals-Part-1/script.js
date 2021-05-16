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

//old way to declare variables
var job = 'teacher';
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
console.log(populationHalfOne);

console.log(population++);

let populationOfFinland = 6000000;
console.log(population > populationOfFinland);
console.log(population > 33000000);

let description = country + ' is in ' + continent + ', and its ' + population + ' people speak '+ language;
console.log(description);

/**********************************/
/*CODING CHALLENGE #1            */
/********************************/

/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK*/

let massOfJhon, massOfMark, heightOfJhon, heightOfMark, bmiOfJhon, bmiOfMark;
let markHigherBMI;

massOfJhon = prompt('Introduce massOfJhon');
massOfMark = prompt('Introduce massOfMark');
heightOfJhon = prompt('Introduce heightOfJhon');
heightOfMark = prompt('Introduce heightOfMark');

bmiOfJhon = massOfJhon/ heightOfJhon ** 2;
bmiOfMark = massOfMark/ heightOfMark ** 2;

markHigherBMI = bmiOfMark > bmiOfJhon;
console.log(bmiOfJhon, bmiOfMark);
console.log(markHigherBMI);

/**********************************/
/*CODING CHALLENGE #2            */
/********************************/

/*Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
    Your tasks:
    1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
GOOD LUCK*/

let higherBMI, lowerBMI, higherBMIValue, lowerBMIValue;

if (bmiOfMark > bmiOfJhon){
    higherBMI = 'Mark';
    higherBMIValue = bmiOfMark;
    lowerBMI = 'John'
    lowerBMIValue = bmiOfJhon;
} else {
    higherBMI = 'John';
    higherBMIValue = bmiOfJhon;
    lowerBMI = 'Mark'
    lowerBMIValue = bmiOfMark;
}

console.log(`${higherBMI}'s BMI (${higherBMIValue}) is higher than ${lowerBMI}'s (${lowerBMIValue})`);
