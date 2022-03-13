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

//declare a function*
//call the playRound function inside the function*
//use prompt() to get input from the user*
//console.log() the results of the match*
//find a way to repeat this until there are 5 rounds* 
//find a way to increment numbers*
//find a way to keep score
//return score at end and declare winner
//myscore ++
//compscore ++;
//console.log(playRound(playerSelection, computerSelection));
// console.log(myscore, compscore);

function game() {

    let myscore = 0;
    let compscore = 0;    
    let tie = 0

    for (let i=0; i < 5; i++) { //start a loop
      playerSelection = prompt('Rock, paper, scissors?'); //prompt the player and get playerSelection value
      computerSelection = computerPlay(); //call the function computerPlay to get computerSelection value
      if (playRound(playerSelection,computerSelection) == 'You win!') {
          myscore++;
          console.log('You win!')  
      } else if (playRound(playerSelection, computerSelection) == 'You lose!') {
          compscore++;
          console.log('You lose');
      } else {
          console.log('It\'s a tie!');
      }
      console.log(myscore, compscore)
      }

      if (myscore > compscore) {
          return `You win! ${myscore} to ${compscore}`; 
      } else if (compscore > myscore) {
          return `You lose! ${myscore} to ${compscore}`;
      } else {
          return `It's a tie!  ${myscore} to ${compscore}`;
      }
}

//The big problem I had with this was WHEN i was console.log() -ing playRound().  
//I was actually calling the function two times with different results, therefore the scoring 
//was behaving unpredictably.  

//I fixed this by simplifying the code and not pulling the returned value from the function but just a string I wrote.