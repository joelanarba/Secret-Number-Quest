'use strict';

let secreteNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score){
    document.querySelector('.score').textContent = score
}

const displayNumber = function(number){
    document.querySelector('.number').textContent = number;
}


document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        displayMessage('⛔No Number!');
    } //when player wins
    else if(guess === secreteNumber){
        displayMessage('🎉 Correct Number!');
        displayNumber(secreteNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } 
    //when player is wrong
    else if(guess !== secreteNumber){
        if (score > 1) {
            displayMessage(guess > secreteNumber ? '📈Too high' : '📈Too low');
            score--;
            displayScore(score);
        } else{
            displayMessage('You lost the game 💥');
            displayScore(0)
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secreteNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start guessing...');
    displayNumber('?');
    displayScore(score);
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});