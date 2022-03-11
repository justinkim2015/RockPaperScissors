//pick a random number 0 to 2
//If number is 0 return the value rock
//if number is 1 return the value paper
//if number is 2 return the value scissors


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

//declare a function
//give two parameters playerselection and computerselection
//create a way to have playerselection input into the game
//make the computer selection parameter call the computerPlay function
//write conditonal statements within the function to follow logic of RPS
//make playerSelection case insensitive
//determine the winner of the match
//return a string declaring the winner.

function RPS(playerSelection, computerSelection) {
     computerSelection = computerPlay();
     if (playerSelection == rock && computerSelection == paper) {
         return 'You lose! Paper beats rock!';
     } else if (playerSelection == rock && computerSelection == scissors) {
         return 'You win!Rock beats Paper!';
     } else if (playerSelection == rock && computerSelection == rock) {
         return 'It\'s a tie! You both played rock!';
     } else if (playerSelection == paper && computerSelection == paper) {
         return 'It\'s a tie! You both played paper!';
     } else if (playerSelection == paper && computerSelection == scissors) {
         return 'You lose! Scissors beats paper!';
     } else if (playerSelection == paper && computerSelection == rock) {
         return 'You win! Paper beats rock!';
     } else if (playerSelection == scissors && computerSelection == paper) {
         return 'You win! Scissors beats paper!';
     } else if (playerSelection == scissors && computerSelection == scissors) {
         return 'It\'s a tie! You both played scissors!';
     } else {
         return 'You lose! Rock beats scissors!';
    }
}

