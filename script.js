// Rock paper scissors which plays in the console!


// Global Variables
const draw = "It's a Draw!";
const win = "Congratulations you Won!!";
const lose = "Oh No! You Lost :(";
let rock = 'Rock';
let paper = 'Paper';
let scissors = 'Scissors';
let playerScore = 0;
let computerScore = 0;
rock > scissors;
scissors > paper;
paper > rock;

// On Click Functions for buttons //

const rockButton = document.getElementById("Rock").addEventListener('click', function onClick() {
    return rock;
});

const paperButton = document.getElementById("Paper").addEventListener('click', function onClick() {
    return paper;
});

const scissorsButton = document.getElementById("Scissors").addEventListener('click', function onClick() {
    return scissors;
});



// Function which determines computerSelect: Decides randomly
function computerPlay() {
    const computerSelect = ['ROCK', 'PAPER', 'SCISSORS'];
    return computerSelect[Math.floor(Math.random() * computerSelect.length)];
}

// Function which determines outcome of round //

function playRound(playerSelect, computerSelect) {
    // Player Selects Rock //
    if(playerSelect === rockButton && computerSelect === "ROCK") {
        return draw;
    }
    else if(playerSelect === rockButton && computerSelect === "PAPER") {
        return lose;
    }
    else if(playerSelect === rockButton && computerSelect === "SCISSORS") {
        return win;
    }
    // Player Selects Paper //
    else if(playerSelect === paperButton && computerSelect === "ROCK") {
        return win;
    }
    else if(playerSelect === paperButton && computerSelect === "PAPER") {
        return draw;
    }
    else if(playerSelect === paperButton && computerSelect === "SCISSORS") {
        return lose;
    }
    // Player Selects Scissors //
    if(playerSelect === scissorsButton && computerSelect === "ROCK") {
        return lose;
    }
    else if(playerSelect === scissorsButton && computerSelect === "PAPER") {
        return win;
    }
    else if(playerSelect === scissorsButton && computerSelect === "SCISSORS") {
        return draw;
    }
}

// Function which lets a 5 round game play and displays final score at the end

function game() {
    for(let i = 0; i < 5; i++) {
        playerSelect = prompt("click Button");
        computerSelect = computerPlay();
        console.log(playRound(playerSelect, computerSelect));
    }
    if(playerScore > computerScore) {
        console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
    }
    else if(playerScore < computerScore) {
        console.log(`You Lost :( Final Score: ${playerScore} to ${computerScore}`);
    }
    else {
        console.log(`It's a draw! Final Score: ${playerScore} to ${computerScore}`);
    }
    
}

game();






   


