'use strict';
/*
//read DOM element value
console.log(document.querySelector('.message').textContent);
//set DOM element value
document.querySelector('.message').textContent = '🎉 Correct Number!'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/*Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
    Your tasks:
    1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �
 */

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

function numberCompare(guess) {
    // When there is no input
    if (!guess) {
        displayMessage(`🧨 No Number!`);

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage(`🎉 Correct Number!`);
        document.querySelector('.number').textContent = secretNumber;
        changeBackground(`#60b347`);
        document.querySelector('.number').style.width = `30rem`;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
            displayMessage(`New High Score...`);
            changeBackground('blue');
        }
    }    // When guess is not equal to secret number
     else if (guess !== secretNumber) {
        document.querySelector('.message').textContent
            = guess > secretNumber ? `👆 You are higher!` : `👇 You are lower!`;
        score--;
        document.querySelector('.score').textContent = score;
        if (score === 0) {
            displayMessage(`😥 You Lose!`);
             changeBackground('red');
        }
    }
}

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const changeBackground =  function (color) {
    document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener
 ('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    numberCompare(guess);
 });

document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage(`Start guessing...`);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    changeBackground('#222');
    document.querySelector('.number').style.width = `15rem`;
})

