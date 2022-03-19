let playerscore = 0;
let compscore = 0;

//buttons
//using an anon function to use variables in eventlistener
const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {playRound('rock',computerPlay)});
const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {playRound('paper',computerPlay)});
const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {playRound('scissors',computerPlay)});

//scoreboard 
const score = document.querySelector('.scoreboard');
const announcement = document.querySelector('.winOrLose');
const winner = document.querySelector('.winner');

//functions
function computerPlay() {
    let random = Math.floor(Math.random()*3);
    if (random == 0) {
        return 'rock';
    } else if (random == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
     computerSelection = computerPlay();
     let player = (playerSelection.toLowerCase());
     if ((player == 'rock' && computerSelection == 'paper') || 
     (player == 'paper' && computerSelection == 'rock') || 
     (player == 'scissors' && computerSelection == 'paper')) {
         winRound();
     } else if ((player == 'rock' && computerSelection == 'rock') || 
     (player == 'paper' && computerSelection == 'paper') ||
     (player == 'scissors' && computerSelection == 'scissors')) {
        tieRound();
     } else {
        loseRound();
     }
     totalScore();
}

function totalScore () {
    if (playerscore == 5) {
        announcement.textContent = `You win the match! Computers are lame!`;
    } else if (compscore == 5) {
        announcement.textContent = 'You lost the match, computers are better than you!';
    } else;
}

function loseRound() {
    if ((compscore < 5) && (playerscore !== 5)) {
      compscore++; 
      score.textContent = `${playerscore} - ${compscore}`;
      announcement.textContent = 'You lost this round, try again!';
    }
}

function winRound() {
    if ((playerscore < 5) && (compscore !== 5)) {
      playerscore++; 
      score.textContent = `${playerscore} - ${compscore}`;
      announcement.textContent = 'Congrats!  You got this one!'
    }
}

function tieRound() {
    if (((playerscore < 5) && (compscore !== 5)) || ((compscore < 5) && (playerscore !== 5))) {
      score.textContent = `${playerscore} - ${compscore}`;
      announcement.textContent = 'It\'s a tie! Once more!';
    }




}


//old loopy guy*************
// function game() {

//     let myscore = 0;
//     let compscore = 0;    
//     let tie = 0

//     for (let i=0; i < 5; i++) {
//       playerSelection = prompt('Rock, paper, scissors?');
//       computerSelection = computerPlay(); 
//       if (playRound(playerSelection,computerSelection) == 'You win!') {
//           myscore++;
//           console.log('You win!')  
//       } else if (playRound(playerSelection, computerSelection) == 'You lose!') {
//           compscore++;
//           console.log('You lose');
//       } else {
//           console.log('It\'s a tie!');
//       }
//       console.log(myscore, compscore)
//       }

//       if (myscore > compscore) {
//           return `You win! ${myscore} to ${compscore}`; 
//       } else if (compscore > myscore) {
//           return `You lose! ${myscore} to ${compscore}`;
//       } else {
//           return `It's a tie!  ${myscore} to ${compscore}`;
//       }
// }

