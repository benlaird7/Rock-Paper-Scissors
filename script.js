function computerPlay() {
    const computerSelect = ['Rock', 'Paper', 'Scissors'];
    return computerSelect[Math.floor(Math.random() * computerSelect.length)];
}
let playerSelect = prompt(" Choose rock, paper, or scissors");
let computerSelect = computerPlay();

const playRound = (playerSelect, computerSelect) => {
    //Player Chooses Rock//
    if ((playerSelect === "ROCK") && (computerSelect === "Paper")) {
        return "You Lose :(";
    } else if ((playerSelect === "ROCK") && (computerSelect === "Rock")) {
        return "It's a Draw!";
    } else if ((playerSelect === "ROCK") && (computerSelect === "Scissors")) {
        return "You Win!";
    }
    //player chooses scissors//
    if ((playerSelect === "SCISSORS") && (computerSelect === "Rock")) {
        return "You Lose :(";
    } else if ((playerSelect === "SCISSORS") && (computerSelect === "Scissors")) {
        return "It's a Draw!";
    } else if ((playerSelect === "SCISSORS") && (computerSelect === "Paper")) {
        return "You Win :D";
    }
    //player chooses paper//
    if ((playerSelect === "PAPER") && (computerSelect === "Scissors")) {
        return "You Lose :(";
    } else if ((playerSelect === "PAPER") && (computerSelect === "Paper")) {
        return "It's a Draw!";
    } else if ((playerSelect === "PAPER") && (computerSelect === "Rock")) {
        return "You Win :D";
    }
}


function game() {
    for(let i = 0; i < 5; i++) {
        playRound();
    }
}
    
game()

