# Rock Paper Scissors Project

## Description

This project is a simple implementation of the classic **Rock Paper Scissors** game using JavaScript. The game runs in the console and allows the user to play against the computer for 5 rounds. Scores are displayed in the console after each round.

👉 A more advanced **interactive version** of this project is available in the [`feature/interactive-ui`](https://github.com/sid-shinseo/Project-Rock-Paper-Scissors-odin/tree/feature/interactive-ui) branch.  
It includes buttons, score display in the UI, and a "Play Again" feature — no need to use the console!

## Features

- The computer randomly chooses between "rock", "paper", or "scissors".
- The user is prompted to enter their choice via a prompt box.
- User input is case-insensitive (uppercase or lowercase is accepted).
- After each round, a message indicates who won.
- The game consists of 5 rounds, with scores updated after each round.
- The final score is displayed in the console.

## Technologies Used

- Basic HTML for page structure
- JavaScript for game logic
- CSS via [Simple.css](https://simplecss.org/) for minimal styling

## How to Play

1. Open the `index.html` file in a web browser.
2. The game will start automatically and ask you to choose "rock", "paper", or "scissors" through a prompt.
3. Enter your choice and confirm.
4. The result of each round will be displayed in the browser’s console (press F12 or right-click → Inspect → Console to view).
5. Scores are updated after each round for a total of 5 rounds.

## Code Structure

- **index.html**: Basic HTML structure with the JavaScript linked.
- **script.js**: Contains all the game functions:
  - `getComputerChoice()` — randomly selects the computer’s choice.
  - `getHumanChoice()` — prompts and validates the user’s choice.
  - `playRound(humanChoice, computerChoice)` — plays one round and returns the winner.
  - `playGame()` — main loop that runs 5 rounds and keeps score.

## Possible Improvements

- Display results and scores directly on the webpage instead of the console.
- Add interactive buttons and animations for a better UI.
- Allow the number of rounds to be configurable.
- Add a multiplayer mode.

---

Project completed as part of The Odin Project.

---

### Author

Dleffy / Sid-Shinseo

---
