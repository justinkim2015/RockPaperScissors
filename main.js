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
         return 'You lose!';
     } else if (player == 'rock' && computerSelection == 'scissors') {
         return 'You win!';
     } else if (player == 'rock' && computerSelection == 'rock') {
         return 'It\'s a tie! You both played rock!';
     } else if (player == 'paper' && computerSelection == 'paper') {
         return 'It\'s a tie! You both played paper!';
     } else if (player == 'paper' && computerSelection == 'scissors') {
         return 'You lose!';
     } else if (player == 'paper' && computerSelection == 'rock') {
         return 'You win!';
     } else if (player == 'scissors' && computerSelection == 'paper') {
         return 'You win!';
     } else if (player == 'scissors' && computerSelection == 'scissors') {
         return 'It\'s a tie! You both played scissors!';
     } else {
         return 'You lose!';
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

const button = document.querySelector('#rock')

button.addEventListener('click', playRound) 








}
