function computerPlay() {
    const computerSelect = ['Rock', 'Paper', 'Scissors'];
    return computerSelect[Math.floor(Math.random() * 3)];
}

const playRound = (playerSelect, computerSelect) => {
    if(playerSelect == 'Rock' && computerSelect === 'Scissors') {
        return "You Win!";
    }
    else if(playerSelect == 'Scissors' && computerSelect === 'Paper') {
        return "You Win!";
    }
    else if(playerSelect == 'Paper' && computerSelect === 'Scissors') {
        return "You Win!";
    }
    else if(playerSelect == 'Rock' && computerSelect ==='Paper') {
        return "You Lose :(";
    }
    else if(playerSelect == 'Scissors' && computerSelect ==='Rock') {
        return "You Lose :(";
    }
    else if(playerSelect == 'Paper' && computerSelect ==='Scissors') {
        return "You Lose :(";
    }
    else {
        return "Draw";
    }
}
