let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    x = Math.random()
    // console.log(x)
    if(x <= 0.33) {
        return "Rock"
    } else if (x > 0.33 && x <= 0.66){
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Submit Rock, Paper, or Scissors", "Rock")
    console.log(choice)
    return choice
}

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`Draw, both chose ${humanChoice}`)
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`Human wins ${humanChoice} over ${computerChoice}`)
        humanScore++
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log(`Computer wins ${computerChoice} over ${humanChoice}`)
        computerScore++
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`Human wins ${humanChoice} over ${computerChoice}`)
        humanScore++
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(`Computer wins ${computerChoice} over ${humanChoice}`)
        computerScore++
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`Human wins ${humanChoice} over ${computerChoice}`)
        humanScore++
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(`Computer wins ${computerChoice} over ${humanChoice}`)
        computerScore++
    }   
    console.log(`Human Score:${humanScore}, Computer Score:${computerScore}`)
    return [humanScore, computerScore];
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame(rounds) {
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        //({humanScore,computerScore} = playRound(humanSelection,computerSelection));
        ([humanScore, computerScore] = playRound(humanSelection, computerSelection));
        //console.log(`Score:${humanScore}, ${computerScore}`)
    }
    
    // Annouce winner
    if (humanScore>computerScore) {
        console.log(`Human wins ${humanScore} to ${computerScore}`)
    } else if (computerScore>humanScore) {
        console.log(`Human loses ${humanScore} to ${computerScore}`)
    } else {
        console.log(`Draw! ${humanScore} to ${computerScore}`)
    }
}