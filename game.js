// variables

const options = ["rock", "paper", "scissors"]

let computerSelection
let playerSelection

// functions

function computerPlay () {
	// randomly returns rock, paper, scissors
	computerSelection = options[Math.floor(Math.random()*options.length)];
	return computerSelection;
};


function humanPlay () {
	playerSelection = window.prompt("Choose rock, paper or scissors");
	return playerSelection.toLowerCase();
}


function gameRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "player";
  }
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    return "computer";
  }
}


function game() {
	// play a 5 round game using gameRound()
	console.log("Round 1")
	humanPlay();
	computerPlay();
	console.log(`Computer: ${computerSelection}. Human: ${playerSelection}`)
	console.log(gameRound(computerSelection, playerSelection));
	console.log("Round 2")
	humanPlay();
	computerPlay();
	console.log(`Computer: ${computerSelection}. Human: ${playerSelection}`)
	console.log(gameRound(computerSelection, playerSelection));
	console.log("Round 3")
	humanPlay();
	computerPlay();
	console.log(`Computer: ${computerSelection}. Human: ${playerSelection}`)
	console.log(gameRound(computerSelection, playerSelection));
	console.log("Round 4")
	humanPlay();
	computerPlay();
	console.log(`Computer: ${computerSelection}. Human: ${playerSelection}`)
	console.log(gameRound(computerSelection, playerSelection));
	console.log("Round 5")
	humanPlay();
	computerPlay();
	console.log(`Computer: ${computerSelection}. Human: ${playerSelection}`)
	console.log(gameRound(computerSelection, playerSelection));
	return "Game finished"
}
