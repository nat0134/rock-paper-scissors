/**
 * The program prompts a user to input a choice to play with the computer of the
 * game "Rock Paper Scissors", winners and losers are announced. Each round of 
 * game records accumulated scores. When full game is finalised, final winner 
 * and score is announced.
 * 
 * Written by "Natalia Lee"
 * Date: 29/03/2026
 */

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
 * Human player is prompted to enter one of the strings "rock", "paper" or 
 * "scissors" and the player's choice is return in string. Invalid inputs are 
 * not required to be handled.
 * 
 * @returns {string} The human layer's input is returned.
 */
function getHumanChoice() {
    let playerChoice = prompt("Make a choice - paper, scissors or rock!")
                       .toLowerCase();

    if (playerChoice === "rock") {
        return "rock";
    } else if (playerChoice === "paper") {
        return "paper";
    } else if (playerChoice === "scissors") {
        return "scissors";
    }
}

/**
 * Plays full round of 5 games, keeps track of the scores and declares the final 
 * winner and score after the last round.
 * 
 * @returns {} Prints a winner or loser announcement to console.
 */
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    /** A human and computer player choices as arguments, plays a single round, 
     * increments the round winner's score and logs a winner announcement.
     *   
     * @param {string} humanChoice - human player choice.
     * @param {string} computerChoice - computer player choice.
     * @returns {} Prints a winner or loser announcement to console.
     */
    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();
        const beats = { rock: "scissors", paper: "rock", scissors: "paper" };

        if (humanChoice === computerChoice) {
            console.log("It's a tie!.");
        } else if (beats[humanChoice] === computerChoice) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}.`);
        } 
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log(`You are the WINNER! Your total score is ${humanScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`You lost! Your lost by ${computerScore - humanScore} points.`);
    } else {
        console.log("It's a tie! Start a new game?");
    }
}

playGame();

