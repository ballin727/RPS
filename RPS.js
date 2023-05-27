function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random()* choices.length);
    return choices[random];
}



function playRound() {
    const user = prompt('Rock, paper, or scissors? ')
    const computerChoice = getComputerChoice();
    if (computerChoice == 'Rock' && user == 'Scissors') {
            console.log("You Lose! Rock beats Scissors")
    }
    else  if (computerChoice == 'Paper' && user == 'Rock') {
        console.log("You Lose! Paper beats Rock")
    }
    else  if (computerChoice == 'Scissors' && user == 'Paper') {
    console.log("You Lose! Scissors beats Paper")
    }
    else  if (computerChoice == 'Paper' && user == 'Scissors') {
        console.log("You Win! Scissors beats Paper")
    }
    else  if (computerChoice == 'Rock' && user == 'Paper') {
        console.log("You Win! Paper beats Rock")
    }
    else  if (computerChoice == 'Scissors' && user == 'Rock') {
        console.log("You Win! Rock beats Scissors")
    }
    else {
        console.log("It's a tie!!!")
    }
}
while (true) {
    playRound()
    const playAgain = confirm('Do you want to play again?');
  if (!playAgain) {
    break;
  }
}

