// Rock paper scissors which plays in the console!


// Global Variables
let rock = 'Rock';
let paper = 'Paper';
let scissors = 'Scissors';
let playerScore = 0;
let computerScore = 0;
rock > scissors;
scissors > paper;
paper > rock;


// Function which determines computerSelect: Decides randomly
function computerPlay() {
    const computerSelect = ['ROCK', 'PAPER', 'SCISSORS'];
    return computerSelect[Math.floor(Math.random() * computerSelect.length)];
}

// Function which determines outcome of round

function playRound(playerSelect, computerSelect) {

    if(playerSelect > computerSelect) {
        playerScore++;
        return "You Win!";
    }
    else if(playerSelect < computerSelect) {
        computerScore++;
        return "You Lose";
    }
    else if(playerSelect === computerSelect) {
        return "Draw";
    }
}


// Function which lets a 5 round game play and displays final score at the end

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelect = document.getElementsByTagName('button');
        playerSelect.addEventListener("click", () => {
        console.log("Button clicked.");
});
        let computerSelect = computerPlay();
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





   


