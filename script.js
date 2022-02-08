let playerScore = 0;
let computerScore = 0;

// Prompt user for his choice
function playerInput() {
  let input = prompt("Choose one: rock paper scissors");
  input = input.toLowerCase();
  return input;
}
// Make a random computer selection
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0
    ? "rock"
    : randomNumber === 1
    ? "scissors"
    : "paper";
}

//Basic game logic
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "Paper beats rock. You lose";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "Rock beats scissors. You win.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "Scissors beat paper. You lose.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Paper beats rock. You win.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "Scissors beat paper. You win.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "Rock beats scissors. You lose.";
  }
}

//Play a round and declare a winner
function round() {
  let playerSelection = playerInput().toLowerCase();
  let computerSelection = computerPlay();
  let roundResult = playRound(playerSelection, computerSelection);

  console.log(computerSelection);
  console.log(roundResult);

  console.log(`Your score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
}

/* if (roundResult.search('win') =! -1) {
    playerScore += 1
} */
/* function gameOver() {
    if (playerScore === 3) {
        return console.log('You win, you big effin winner');
    }else if (computerScore === 3) {
        return console.log('You lost, what a pity')
    }
} */

function main() {
  let roundNumber = parseInt(prompt("How many rounds do you want to play?"));
  for (let i = 0; i < roundNumber; i++) {
    round();
  }
  if (playerScore === computerScore) {
    console.log("It's a tie");
  } else if (playerScore > computerScore) {
    console.log(`You win ${playerScore} against ${computerScore}`);
  } else {
    console.log(`You lose ${computerScore} against ${playerScore}`);
  }
}

main();
