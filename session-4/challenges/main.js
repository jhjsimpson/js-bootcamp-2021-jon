/* Rock, Paper, Scissors

Create this classic game.

You need to accept the user’s choice (which for now can be stored in a variable).

The computer choice can be derived from the ‘Math.random()’ method which returns a number between 0 and 1.

Log the result and the choices for both user and computer. */

// Wrap everything in a function so that it can be called for both sides
const getRandomResult = () => {
  // A function that returns a random number between 0 and the argument number
  function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

  // Use the random number to pick an option from the array
  const rpsOption = ["Rock", "Paper", "Scissors"];
  let getOutcome = getRandomInt();
  let Result = rpsOption[getOutcome];
  return Result;
};

// Call the function to get a result and store in a variable for player and computer
let playerResult = getRandomResult();
console.log("Player:", playerResult);
let cpuResult = getRandomResult();
console.log("Computer:", cpuResult);

// Funtion that determines the winner and returns the result
const rpsResult = (x, y) => {
  if (
    (x === "Rock" && y === "Scissors") ||
    (x === "Paper" && y === "Rock") ||
    (x === "Scissors" && y === "Paper")
  ) {
    return "Player Wins";
  } else if (x === y) {
    return "Draw";
  } else {
    return "Computer Wins";
  }
};
// Call function to determine who wins and log to console
console.log(rpsResult(playerResult, cpuResult));

// Selectors:

// result-computer - computer outcomes this round
// result-player - player outcomes this round
// selection-rock
// selection-paper
// selection-scissors
// final-result - display who won this round
// computer-win-total - total number of computer wins
// player-win-total - total number of player wins
