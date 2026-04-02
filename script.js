/**
 * The program prompts a user to input a choice to play with the computer of the
 * game "Rock Paper Scissors", winners and losers are announced. Each round of 
 * game records accumulated scores. When full game is finalised, final winner 
 * and score is announced.
 * 
 * Written by "Natalia Lee"
 * Date: 03/04/2026
 */

let humanScore = 0;
let computerScore = 0;

/**
 * Uses Math.random() to generate and return one of the string values
 * "rock", "paper" or "scissors" as computer's choice.
 * 
 * @returns {string} The computer's choice is returned.
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
 * A human and computer player choices as arguments, plays a single round, 
 * increments the round winner's score and displays win or lose announcement.
 *   
 * @param {string} humanChoice - human player choice.
 * @returns {string} Returns winner or loser announcement.
 */
function playRound(humanChoice) {
    const computerChoice = getComputerChoice().toLowerCase();
    const beats = { rock: "scissors", paper: "rock", scissors: "paper" };

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (beats[humanChoice] === computerChoice) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
    } 
   
}

/** 
 * Determines winner or loser once running score reaches by player or computer.
 *   
 * @param {string} humanChoice - human player choice.
 * @returns {string} Returns a winner or loser announcement each score.
 */
function getScore (humanScore, computerScore) {
    if (humanScore === 5 && computerScore === 5) {
        return "It's a tie! Start a new game?";
    }
    if (humanScore === 5) return "You are the WINNER!";
    if (computerScore === 5) return `You lost by ${computerScore - 
                                    humanScore} points.`;
    return `${humanScore} | ${computerScore}`;
}

const select = document.querySelector("div");
const lineBreak = document.createElement("div");
select.appendChild(lineBreak);

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";
lineBreak.appendChild(btnRock);
lineBreak.appendChild(btnPaper);
lineBreak.appendChild(btnScissors);

const finalScore = document.createElement("div");
select.appendChild(finalScore);


const results = document.getElementById("result");
lineBreak.appendChild(results);
btnRock.addEventListener("click", () => {
    results.textContent = playRound("rock");
    finalScore.textContent = getScore(humanScore, computerScore);
});
btnPaper.addEventListener("click", () => {
    results.textContent = playRound("paper");
    finalScore.textContent = getScore(humanScore, computerScore);
});
btnScissors.addEventListener("click", () => {
    results.textContent = playRound("scissors");
    finalScore.textContent = getScore(humanScore, computerScore);
});





