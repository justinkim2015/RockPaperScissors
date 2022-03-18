window.onload = function () { //WHY DOES THIS WORK STUDYSTUDY

let playerscore = 0;
let compscore = 0;
        
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
         winRound();
     } else if (player == 'rock' && computerSelection == 'scissors') {
        loseRound();
     } else if (player == 'rock' && computerSelection == 'rock') {
        tieRound();
     } else if (player == 'paper' && computerSelection == 'paper') {
        tieRound();
     } else if (player == 'paper' && computerSelection == 'scissors') {
        loseRound();
     } else if (player == 'paper' && computerSelection == 'rock') {
         winRound();
     } else if (player == 'scissors' && computerSelection == 'paper') {
         winRound();
     } else if (player == 'scissors' && computerSelection == 'scissors') {
        tieRound();
     } else {
        loseRound();
     }
     totalScore();
     updateScore();

}
//Trying to figure out how to replace the inputs
function updateScore() {
    const text = document.querySelector('.winOrLose');
    console.log(text)
    if (text == "You win!" || "It's a tie!" || "You lose!") {
        console.log('hi');
        } else {
          deleteMsg()  
        };
}


//this code selects all <p> elements in the div results
//THIS IS CURRENT WORK, trying to figure out how to
//replace and or delete the message so only 1 is 
//displayed at a time.
function deleteMsg() {
    const inside = document.querySelector('.results');
    inside.remove();
}

function deleteAll() {
    const p = document.querySelectorAll('.winOrLose');
    document.replaceChildren();//replaces everything in node with ()
    console.log(p)
    }

function totalScore () {
    if (playerscore == 5) {
        console.log(`You win! ${playerscore} - ${compscore}`);
    } else if (compscore == 5) {
        console.log(`You lose! ${playerscore} - ${compscore}`);
    } else;
}

function loseRound() {
    if ((compscore < 5) && (playerscore !== 5)) {
      compscore++; 
      const lose = document.createElement('p');
      lose.classList.add('winOrLose');
      lose.textContent = 'You lose!';
      results.appendChild(lose);
      const score = document.createElement('p');
      score.textContent = `${playerscore} - ${compscore}`;
      results.appendChild(score);
    }
}

function winRound() {
    if ((playerscore < 5) && (compscore !== 5)) {
      playerscore++; 
      const win = document.createElement('p');
      win.classList.add('winOrLose');
      win.textContent = 'You win!';
      results.appendChild(win);
      const score = document.createElement('p');
      score.textContent = `${playerscore} - ${compscore}`;
      results.appendChild(score);
    }
}

function tieRound() {
    if (((playerscore < 5) && (compscore !== 5)) || ((compscore < 5) && (playerscore !== 5))) {
      const tie = document.createElement('p');
      tie.classList.add('winOrLose');
      tie.textContent = 'It\'s a tie!';
      results.appendChild(tie);
      const score = document.createElement('p');
      score.textContent = `${playerscore} - ${compscore}`;
      results.appendChild(score);
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

//This is code for eventlisteners on buttons
//using an anon function to use variables in eventlistener
const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {playRound('rock',computerPlay)});

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {playRound('paper',computerPlay)});

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {playRound('scissors',computerPlay)});


//This is code for adding text via DOM manipulation
const body = document.querySelector('body')

const div = document.createElement('div');
div.classList.add('results');
body.appendChild(div);

const results = document.querySelector('.results');


}






//this will keep track of score as long as I can dynamically change the value in 
//the two variables.

//This will be moved to conditional statements

// const score = document.createElement('p');
// score.textContent = `${playerscore} - ${compscore}`;
// results.appendChild(score);

// const win = document.createElement('p');
// win.textContent = 'You win!';
// results.appendChild(win);

// const lose = document.createElement('p');
// lose.textContent = 'You lose!';
// results.appendChild(lose);



