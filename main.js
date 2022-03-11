//pick a random number 0 to 2
//If number is 0 return the value rock
//if number is 1 return the value paper
//if number is 2 return the value scissors

function computerPlay() {
    let random = Math.floor(Math.random()*3);
    if (random == 0) {
        return 'rock';
    } else if (random == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

console.log(computerPlay)


