// getComputerChoice ==> return le choix de l'ordinateur (rock paper or scissors)
// getHumanChoice ==> input du choix de l'utilisateur
// humanScore | computerScore variable 
// utilise ToLowercase pour que l'utilisateur puisse utiliser minuscule/majuscule
// playRound ==> debut d'un round



function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let choice = prompt("Choose rock, paper, or scissors:");

    // Keep asking until the input is valid
    while (!choice || !validChoices.includes(choice.toLowerCase())) {
        choice = prompt("Invalid choice. Please choose rock, paper, or scissors:");
    }

    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if(humanChoice === computerChoice){
        console.log("It's a tie");
        return "tie"
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win this round!");
        return "human"
    } else {
        console.log("Computer wins this round!");
        return "computer"
    }
}

function playGame() {
    let humanScore = 0 ;
    let computerScore = 0 ;

    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const result = playRound(humanChoice, computerChoice);

        if (result === "human"){
            humanScore++
        }
        else if (result === "computer"){
            computerScore++
        }
        
        console.log(`Score — You: ${humanScore}, Computer: ${computerScore} /n`);
    }
}

