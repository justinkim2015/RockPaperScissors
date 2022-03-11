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


function playRound(playerSelection, computerSelection) {
     computerSelection = computerPlay();
     let player = (playerSelection.toLowerCase());
     if (player == 'rock' && computerSelection == 'paper') {
         return 'You lose! Paper beats rock!';
     } else if (player == 'rock' && computerSelection == 'scissors') {
         return 'You win! Rock beats Paper!';
     } else if (player == 'rock' && computerSelection == 'rock') {
         return 'It\'s a tie! You both played rock!';
     } else if (player == 'paper' && computerSelection == 'paper') {
         return 'It\'s a tie! You both played paper!';
     } else if (player == 'paper' && computerSelection == 'scissors') {
         return 'You lose! Scissors beats paper!';
     } else if (player == 'paper' && computerSelection == 'rock') {
         return 'You win! Paper beats rock!';
     } else if (player == 'scissors' && computerSelection == 'paper') {
         return 'You win! Scissors beats paper!';
     } else if (player == 'scissors' && computerSelection == 'scissors') {
         return 'It\'s a tie! You both played scissors!';
     } else {
         return 'You lose! Rock beats scissors!';
    }
}

//declare a function*
//call the playRound function inside the function*
//use prompt() to get input from the user*
//console.log() the results of the match*
//find a way to repeat this until there are 5 rounds* while keeping score 
//break down the above step more^^

function game() {
    for (let i=0; i < 5; i++) {
    playerSelection = prompt('Rock, paper, scissors?');
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    }
}