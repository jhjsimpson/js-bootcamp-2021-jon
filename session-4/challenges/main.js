/* Rock, Paper, Scissors

Create this classic game.

You need to accept the user’s choice (which for now can be stored in a variable).

The computer choice can be derived from the ‘Math.random()’ method which returns a number between 0 and 1.

Log the result and the choices for both user and computer. */

// Selectors
const resultComputer = document.getElementById("result-computer");
const resultPlayer = document.getElementById("result-player");
const rockSelect = document.getElementById("selection-rock");
const paperSelect = document.getElementById("selection-paper");
const scissorsSelect = document.getElementById("selection-scissors");
const reset = document.getElementById("restart");
let winResult = document.getElementById("final-result");
const computerWins = document.getElementById("computer-wins-total");
const playerWins = document.getElementById("player-wins-total");

// Save player choice to a variable on click and passes result to game initialisation
let findChoice = "";
const playRock = () => {
  findChoice = "Rock";
  play(findChoice);
};
const playPaper = () => {
  findChoice = "Paper";
  play(findChoice);
};
const playScissors = () => {
  findChoice = "Scissors";
  play(findChoice);
};

playerScore = 0;

// Game initialises based on selection
function play(x) {
  let cpuResult = getRandomResult();
  // Change image function
  resultComputer.src = imageChange(cpuResult);

  let playerResult = x;
  // Change image function
  resultPlayer.src = imageChange(playerResult);

  // Get result
  let finalResult = rpsResult(cpuResult, playerResult);

  console.log(finalResult);

  // Add score and display on screen
  addUpScore(finalResult);
}

// Function to add score
addUpScore = (x) => {
  if (x === "Player Wins") {
    winResult.innerHTML += playerScore;
  }
};

// Changes the link to an image depending on selection
function imageChange(image) {
  let link = "";
  if (image === "Rock") {
    link =
      "https://rwest88.github.io/Rock-Paper-Scissors/assets/images/rock.png";
  } else if (image === "Paper") {
    link =
      "https://rwest88.github.io/Rock-Paper-Scissors/assets/images/paper.png";
  } else {
    link =
      "https://rwest88.github.io/Rock-Paper-Scissors/assets/images/scissors.png";
  }

  return link;
}

// Call the function to get a result and store in a variable for player and computer
// Wrap everything in a function so that it can be called for both sides
const getRandomResult = () => {
  // A function that returns a random number between 0 and the argument number
  function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

  // Use the random number to pick an option from the array
  const rpsOption = ["Rock", "Paper", "Scissors"];
  let getOutcome = getRandomInt();
  let result = rpsOption[getOutcome];
  return result;
};

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

// Player restarts game
function restartGame() {
  console.log("Reset");
  // playerWins = 0;
  // computerWins = 0;
  // Result = 0;
  // resultComputer = default;
  // resultPlayer = default;
}

// Call function to determine who wins and log to console

// Selectors:

// result-computer - computer outcomes this round
// result-player - player outcomes this round
// selection-rock
// selection-paper
// selection-scissors
// final-result - display who won this round
// computer-win-total - total number of computer wins
// player-win-total - total number of player wins
