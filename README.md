# Rock Paper Scissors Project

## Description

This project is an interactive implementation of the classic **Rock Paper Scissors** game using JavaScript. The user plays against the computer by clicking buttons on the webpage. The game lasts for exactly 5 rounds, with live score updates and round results displayed directly on the page. At the end of the game, a clear final winner message appears, and the user can restart the game by clicking the **Play Again** button.

If you want to see the **first version** of this project, which runs in the console with user input via prompts, check out the [first version here](https://github.com/sid-shinseo/Project-Rock-Paper-Scissors-odin).

## Features

- User chooses between Rock 🪨, Paper 📄, and Scissors ✂️ via buttons.
- The computer randomly selects its choice each round.
- Game consists of exactly 5 rounds.
- Scores and round results are updated and displayed dynamically on the page.
- Final winner (or draw) is clearly indicated with colored messages.
- Buttons are disabled at the end of the game to prevent extra input.
- A **Play Again** button appears after the game ends to restart the match without reloading the page.

## Technologies Used

- HTML for page structure and interactive buttons.
- JavaScript for game logic, UI updates, and interactivity.
- CSS via [Simple.css](https://simplecss.org/) for clean and minimal styling.

## How to Play

1. Open the `index.html` file in a web browser.
2. Click one of the three buttons: Rock 🪨, Paper 📄, or Scissors ✂️.
3. The computer will randomly choose its move.
4. The round result and current scores will be displayed on the page.
5. Repeat for 5 rounds.
6. After the 5th round, the final winner message will be shown and the buttons will be disabled.
7. Click the **Play Again** button to reset the game and start a new match.

## Code Structure

- **index.html**: Contains the HTML layout, buttons for choices, placeholders for messages and scores, and the **Play Again** button.
- **script.js**: Handles all game logic and UI updates:
  - `getComputerChoice()` — randomly selects the computer’s move.
  - `playRound(humanChoice, computerChoice)` — determines the winner of each round.
  - Event listeners on choice buttons to play rounds and update the interface.
  - Tracks rounds played and disables buttons after 5 rounds.
  - Displays the final winner message in color.
  - Includes functionality to reset the game when clicking **Play Again**.

## Possible Improvements

- Add animations or sound effects for better user experience.
- Allow the user to configure the number of rounds.
- Add a multiplayer mode.
- Improve responsive design and mobile friendliness.

---

Project completed as part of The Odin Project.

---

### Author

Dleffy / Sid-Shinseo
