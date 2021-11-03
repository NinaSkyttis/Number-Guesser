let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 9);
}

function compareGuesses(humanGuess, computerGuess, target) {
 let human = Math.abs(target - humanGuess);
 let computer = Math.abs(target - computerGuess);

  if (human < computer) {
    return true;
  } else if
    (computer < human) {
      return false;
    }
}

function updateScore(winnerValue) {
  if (winnerValue === 'human') {
    humanScore += 1;
  } else if (winnerValue === 'computer') {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
