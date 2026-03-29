/**
 * Function uses Math.random() to generate and return one of the string values
 * "rock", "paper" or "scissors".
 */
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        return "Rock";
    } else if (random === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice
console.log(getComputerChoice());