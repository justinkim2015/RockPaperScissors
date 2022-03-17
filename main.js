window.onload = function () { //WHY DOES THIS WORK STUDYSTUDY

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
     if (player == 'rock' && computerSelection == 'paper') {
         console.log('You lose!');
     } else if (player == 'rock' && computerSelection == 'scissors') {
         console.log('You win!');
     } else if (player == 'rock' && computerSelection == 'rock') {
         console.log('It\'s a tie! You both played rock!');
     } else if (player == 'paper' && computerSelection == 'paper') {
         console.log('It\'s a tie! You both played paper!');
     } else if (player == 'paper' && computerSelection == 'scissors') {
         console.log('You lose!');
     } else if (player == 'paper' && computerSelection == 'rock') {
         console.log('You win!');
     } else if (player == 'scissors' && computerSelection == 'paper') {
         console.log('You win!');
     } else if (player == 'scissors' && computerSelection == 'scissors') {
         console.log('It\'s a tie! You both played scissors!');
     } else {
         console.log('You lose!');
    }
}


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

//using an anon function to use variables in eventlistener
const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {playRound('rock',computerPlay)}) //working atm

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {playRound('paper',computerPlay)})

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {playRound('scissors',computerPlay)})




}
