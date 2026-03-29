/**
 * 
 */

let humanScore = 0;
let computerScore = 0;
const humanRound = getHumanChoice().toLowerCase();
const computerRound = getComputerChoice().toLowerCase();
const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

/**
 * Function uses Math.random() to generate and return one of the string values
 * "rock", "paper" or "scissors".
 */
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

/**
 * Function prompts player to enter one of the strings "rock", "paper" or "scissors" 
 * and returns the chosen string. Invalid inputs are not required to be handled.
 */
function getHumanChoice() {
    let playerChoice = prompt("Make a choice!").toLowerCase();

    if (playerChoice === "rock") {
        return "rock";
    } else if (playerChoice === "paper") {
        return "paper";
    } else if (playerChoice === "scissors") {
        return "scissors";
    }
}

/**
 * 
 */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!.");
    } else if (beats[humanChoice] === computerChoice) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } 
}

console.log(computerRound);
playRound(humanRound, computerRound);
console.log(humanScore);
console.log(computerScore);
