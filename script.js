let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;

const buttons = document.querySelectorAll("button:not(#play-again)"); // tous sauf Play Again
const playAgainButton = document.getElementById("play-again");
const roundMessage = document.getElementById("round-message");
const humanScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("computer-score");
const choicesDisplay = document.getElementById("choices");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return "tie";

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human";
  } else {
    return "computer";
  }
}

function endGame() {
  buttons.forEach(button => button.disabled = true);
  if (humanScore > computerScore) {
    roundMessage.textContent = "🎉 You won the game! Congratulations! 🎉";
    roundMessage.style.color = "green";
  } else if (computerScore > humanScore) {
    roundMessage.textContent = "💻 Computer won the game! Try again! 💻";
    roundMessage.style.color = "red";
  } else {
    roundMessage.textContent = "🤝 It's a draw game!";
    roundMessage.style.color = "orange";
  }
  playAgainButton.style.display = "inline-block"; // afficher bouton play again
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
  roundMessage.textContent = "Make your move!";
  roundMessage.style.color = "black";
  choicesDisplay.textContent = "";
  buttons.forEach(button => button.disabled = false);
  playAgainButton.style.display = "none";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (roundsPlayed >= totalRounds) return; // ignore clicks après fin

    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    choicesDisplay.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}.`;

    if (result === "human") {
      humanScore++;
      roundMessage.textContent = "You win this round!";
      roundMessage.style.color = "white";
    } else if (result === "computer") {
      computerScore++;
      roundMessage.textContent = "Computer wins this round!";
      roundMessage.style.color = "white";
    } else {
      roundMessage.textContent = "It's a tie!";
      roundMessage.style.color = "white";
    }

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    roundsPlayed++;

    if (roundsPlayed === totalRounds) {
      endGame();
    }
  });
});

playAgainButton.addEventListener("click", () => {
  resetGame();
});
