let rock = 'Rock';
let paper = 'Paper';
let scissors = 'Scissors';
rock > scissors;
scissors > paper;
paper > rock;

function computerPlay() {
    const computerSelect = ['ROCK', 'PAPER', 'SCISSORS'];
    return computerSelect[Math.floor(Math.random() * computerSelect.length)];
}
let playerSelect = prompt("Choose rock, paper, or scissors");
let computerSelect = computerPlay();

function round(playerSelect, computerSelect) {

    if(playerSelect.toUpperCase() > computerSelect) {
        return "You Win!" && alert("You Win!");
    }
    else if(playerSelect.toUpperCase() < computerSelect) {
        return "You Lose" && alert("You Lose");
    }
    else if(playerSelect.toUpperCase() === computerSelect) {
        return "Draw" && alert("It's a Draw");
    }
}


function game() {
    for(let i = 0; i < 5; i++); {
        round(playerSelect, computerSelect);
    }
    
}

game();





   


