// variables

const options = ["rock", "paper", "scissors"]

let computerSelection
let playerSelection
let result = ""
let finalResult = ""
let playerScore = 0
let computerScore = 0
const createH2 = document.createElement('h2')
const buttonPlayAgain = document.querySelector('.play-again');

// functions
function resetGame() {
	buttonPlayAgain.addEventListener('click', () => {
	  window.location.reload();
	});
  }

function computerPlay () {
	// randomly returns rock, paper, scissors
	computerSelection = options[Math.floor(Math.random()*options.length)];
	return computerSelection;
};

function gameRound(playerSelection, computerSelection) {

	if (playerScore === 5) {
		let cContainer = document.querySelector('#winner');			
		createH2.textContent = "CHARNAME wins";
		cContainer.appendChild(createH2);	
	}
	else if (computerScore === 5) {
		let cContainer = document.querySelector('#winner');			
		createH2.textContent = "HAL9000 wins";
		cContainer.appendChild(createH2);	}
	else {
		if (playerSelection === computerSelection) {
			result = "tie";
		}
		if (
			(playerSelection === "rock" && computerSelection === "scissors") ||
			(playerSelection === "scissors" && computerSelection === "paper") ||
			(playerSelection === "paper" && computerSelection === "rock")
		) {
			result = "player";
			console.log('1 point to CHARNAME')
			playerScore += 1;
			console.log(playerScore)
			let container = document.querySelector('#humanScore');
			const humanP = document.createElement('p')
			humanP.textContent = `${playerScore}`
			container.appendChild(humanP)
		}
		if (
			(computerSelection === "rock" && playerSelection === "scissors") ||
			(computerSelection === "scissors" && playerSelection === "paper") ||
			(computerSelection === "paper" && playerSelection === "rock")
		) {
			result = "computer";
			console.log('1 point to HAL9000')
			computerScore += 1;
			console.log(computerScore)
			let cContainer = document.querySelector('#computerScore');
			const computerP = document.createElement('p')
			computerP.textContent = `${computerScore}`
			cContainer.appendChild(computerP)
		}
		resetGame();
		return result
	}
}

const btn1 = document.querySelector('#rock');
btn1.addEventListener('click', () => {
	let computer = computerPlay ();
	round = gameRound('rock', computer);
	console.log(round);
}
)

const btn2 = document.querySelector('#paper');
btn2.addEventListener('click', () => {
	let computer = computerPlay ();
	round = gameRound('paper', computer);
	console.log(round);
}
)

const btn3 = document.querySelector('#scissors');
btn3.addEventListener('click', () => {
	let computer = computerPlay ();
	round = gameRound('scissors', computer);
	console.log(round);
}
)