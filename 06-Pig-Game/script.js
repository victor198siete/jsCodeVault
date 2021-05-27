'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl =  document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.querySelector('#current--0')
const currentScore1El = document.querySelector('#current--1')

let scores, currentScore, activePlayer, playing;

const newGameConf = function(){
    // Starting Conditions
    playing = true;
    activePlayer = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    scores = [0,0];
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    runRollReset();
}

const runRollReset = function () {
    currentScore = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    btnRoll.disabled = false;
}

const calcScore = function () {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    if (scores[activePlayer] < 20) {
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        runRollReset();
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    } else {
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        diceEl.classList.remove('hidden');
        playing = false;
        //btnRoll.disabled = true;
    }
}

newGameConf();

btnRoll.addEventListener('click', function (){
   if (playing) {
       // 1. Generating a random dice roll
       const dice = Math.trunc(Math.random()*6)+1;

       // 2. Display the Dice
       diceEl.classList.remove('hidden');
       diceEl.src = `dice-${dice}.png`;

       // 3. Check for rolled 1: if true, switch to next player
       if (dice !== 1) {
           // Add dice to current score
           currentScore += dice;
           document.getElementById(`current--${activePlayer}`).textContent = currentScore;
       } else {
           // Switch to next player
           runRollReset();
           activePlayer = activePlayer === 0 ? 1 : 0;
           player0El.classList.toggle('player--active');
           player1El.classList.toggle('player--active');
       }
   }

});

btnHold.addEventListener('click', function (){
    if (playing){
        calcScore(activePlayer);
    }
});

btnNewGame.addEventListener('click', newGameConf);
