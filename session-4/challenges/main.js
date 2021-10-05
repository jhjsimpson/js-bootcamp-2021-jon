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
let computerWins = document.getElementById("computer-wins-total");
let playerWins = document.getElementById("player-wins-total");

// Save player choice to a variable on click and passes result to initialise game
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

// Game initialises based on selection
function play(x) {
  let cpuResult = getRandomResult();

  // Repeating myself, could pass through function for the two below
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

// Declare and initialise variables
let playerScore = 0;
let computerScore = 0;

// Function to add score
addUpScore = (x) => {
  if (x === "Player Wins") {
    playerScore += 1;
    console.log(playerScore);
    playerWins.innerHTML = playerScore;
    winResult.innerHTML = x;
  } else if (x === "Computer Wins") {
    computerScore += 1;
    computerWins.innerHTML = computerScore;
    winResult.innerHTML = x;
  } else {
    winResult.innerHTML = x;
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

// Resets game
reset.addEventListener("click", function () {
  console.log("Reset");
  playerScore = 0;
  playerWins.innerHTML = 0;
  computerScore = 0;
  computerWins.innerHTML = 0;
});

// Selectors:

// result-computer - computer outcomes this round
// result-player - player outcomes this round
// selection-rock
// selection-paper
// selection-scissors
// final-result - display who won this round
// computer-win-total - total number of computer wins
// player-win-total - total number of player wins
