function getComputerChoice() {
  randomNumber = Math.random();
  if (0 <= randomNumber && randomNumber < 1 / 3) {
    return "rock";
  } else if (1 / 3 <= randomNumber && randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = "";
  while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    humanChoice = prompt("Choose one of rock, paper, scissors?").toLowerCase();
  }
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanSelection, computerSelection) {
    console.log(
      `Human is: ${humanSelection}   Computer is: ${computerSelection}`
    );

    if (humanSelection === "rock") {
      if (computerSelection === "scissors") {
        humanScore++;
        console.log("You Won. Rock beats Scissors.");
      } else if (computerSelection === "paper") {
        computerScore++;
        console.log("You lose. Paper beats Rock.");
      } else {
        console.log("It is a tie. You both choose Rock.");
      }
    } else if (humanSelection === "paper") {
      if (computerSelection === "scissors") {
        computerScore++;
        console.log("You lose. scissors beats paper.");
      } else if (computerSelection === "rock") {
        humanScore++;
        console.log("You won. Paper beats Rock.");
      } else {
        console.log("It is a tie. You both choose paper.");
      }
    } else {
      if (computerSelection === "rock") {
        computerScore++;
        console.log("You lose. Rock beats Scissors.");
      } else if (computerSelection === "paper") {
        humanScore++;
        console.log("You won. scissors beats paper.");
      } else {
        console.log("It is a tie. You both choose scissors.");
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    if (humanScore === 3 || computerScore === 3) {
      break;
    }
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(`You won. Score is: ${humanScore}:${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lost. Score is: ${humanScore}:${computerScore}`);
  } else {
    console.log(`It is a tie. ${humanScore}:${computerScore}`);
  }
}

playGame();
