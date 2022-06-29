function computerPlay() {
    const computerSelect = ['Rock', 'Paper', 'Scissors'];
    return computerSelect[Math.floor(Math.random() * computerSelect.length)];
}
let playerSelect = prompt(" Choose rock, paper, or scissors");
let computerSelect = computerPlay();

const playRound = (playerSelect, computerSelect) => {
    //Player Chooses Rock//
    if ((playerSelect.toUpperCase() === "ROCK") && (computerSelect === "Paper")) {
        return "You Lose :(";
      } else if ((playerSelect.toUpperCase() === "ROCK") && (computerSelect === "Rock")) {
        return "It's a Draw!";
      } else if ((playerSelect.toUpperCase() === "ROCK") && (computerSelect === "Scissors")) {
        return "You Win!";
      }
      //player chooses scissors//
      if ((playerSelect.toUpperCase() === "SCISSORS") && (computerSelect === "Rock")) {
        return "You Lose :(";
      } else if ((playerSelect.toUpperCase() === "SCISSORS") && (computerSelect === "Scissors")) {
        return "It's a Draw!";
      } else if ((playerSelect.toUpperCase() === "SCISSORS") && (computerSelect === "Paper")) {
        return "You Win :D";
      }
      //player chooses paper//
      if ((playerSelect.toUpperCase() === "PAPER") && (computerSelect === "Scissors")) {
        return "You Lose :(";
      } else if ((playerSelect.toUpperCase() === "PAPER") && (computerSelect === "Paper")) {
        return "It's a Draw!";
      } else if ((playerSelect.toUpperCase() === "PAPER") && (computerSelect === "Rock")) {
        return "You Win :D";
      }
    }


const game = () => {
    for(i = 0; i < 5; i++);
    playRound();
}

const Scoreboard= () => {
    let playerScore = 0;
    let x = playerScore;
    let computerScore = 0;
    let y = computerScore;
    //Player Chooses Rock//
    if ((playerSelect.toUpperCase() === "ROCK") && (computerSelect === "Paper")) {
        return(Number(x), Number(y) + 1);
      } else if ((playerSelect.toUpperCase() === "ROCK") && (computerSelect === "Rock")) {
        return (Number(x), Number(y));
      } else if ((playerSelect.toUpperCase() === "ROCK") && (computerSelect === "Scissors")) {
        return (Number(x) + 1, Number(y));
      }
      //player chooses scissors//
      if ((playerSelect.toUpperCase() === "SCISSORS") && (computerSelect === "Rock")) {
        return(Number(x), Number(y) + 1);
      } else if ((playerSelect.toUpperCase() === "SCISSORS") && (computerSelect === "Scissors")) {
        return (Number(x), Number(y));
      } else if ((playerSelect.toUpperCase() === "SCISSORS") && (computerSelect === "Paper")) {
        return (Number(x) + 1, Number(y));
      }
      //player chooses paper//
      if ((playerSelect.toUpperCase() === "PAPER") && (computerSelect === "Scissors")) {
        return (Number(x), Number(y) + 1);
      } else if ((playerSelect.toUpperCase() === "PAPER") && (computerSelect === "Paper")) {
        return (Number(x), Number(y));
      } else if ((playerSelect.toUpperCase() === "PAPER") && (computerSelect === "Rock")) {
        return (Number(x) + 1, Number(y));
      }
      if (x > y) {
        return "YOU WIN!!"
      }
      else if (x < y) {
        return "You lose";
      }
    }

