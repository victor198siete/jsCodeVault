// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* Using Google, StackOverflow and MDN*/
/*PROBLEM 1:
We work for a company building a smart home thermometer. Our most recent task is this:
"Given an array of temperatures of one day, calculate the temperature amplitude.
Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const otherArray = [1, 14, 9, 21, 23, -7 ];

// 1) Understanding the problem
// - What is temp amplitude?  - Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps, otherArray) {
    let mergeArray = temps.concat(otherArray);

    let max = maxTemperature(mergeArray);
    let min = minTemperature(mergeArray);
    let amplitude = max - min;
    console.log(min, max, amplitude);
};

const maxTemperature = function (temps) {
    let max = temps[0];
    for (let i = 1; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue;
        if (max < temps[i]) max = temps[i];
    }
    return max;
}

const minTemperature = function (temps) {
    let min = temps[0];
    for (let i = 1; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue;
        if (min > temps[i]) min = temps[i];
    }
    return min;
}

calcTempAmplitude(temperatures, otherArray);

/*PROBLEM 2:
Function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// - With two arrays, should we implement functionality twice? No! just merge two arrays!

// 2) Breaking up into sub-problems
// -Merge two arrays*/

/*61 Debugging with the Console and Breakpoints*/

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
    // C - FIX THE BUG (CONVERT PROMPT STRING INTO A NUMBER)
        value: Number(prompt('Degrees celsius: ')),
    };
// B - FIND THE BUG
    console.table(measurement);
    const kelvin = measurement.value + 273;
    return kelvin;
}

// A - IDENTIFY DE BUG
console.log(measureKelvin());
