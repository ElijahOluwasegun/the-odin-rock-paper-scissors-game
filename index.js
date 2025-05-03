console.log("Hello World")

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    // console.log(randomNumber) // Checked to see if randomNumber outputs numbers between 0 and 3
    if (randomNumber === 0 ) {
        return "rock"
    } else if (randomNumber === 1){
        return "paper"
    } else {
        return "scissors"
    }
}

/* 
    console.log(getComputerChoice()) 
    
    Used to test whether the function returns the expected values

*/

function getHumanChoice() {
    let userChoice = prompt("rock, paper, scissors? ").toLowerCase()
    return userChoice
}

/* 
    console.log(getHumanChoice()) 

    Used to test whether the function returns the expected values

*/

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {

    if ((humanChoice === "rock" && computerChoice === "scissors")) {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }

    else if ((humanChoice === "scissors" && computerChoice === "rock")) {
        console.log("Computer wins! Rock beats Scissors");
        computerScore++;
    }

    else if ((humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win! Scissors beat paper");
        humanScore++;
    }
    
    else if ((humanChoice === "paper" && computerChoice === "scissors")) {
        console.log("Computer wins! Scissors beat paper");
        computerScore++;
    }

    else if ((humanChoice === "paper" && computerChoice === "rock")) {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }

    else if((humanChoice === "rock" && computerChoice === "paper")) {
        console.log("Computer wins! Paper beats Rock");
        computerScore++;
    }
    
    else {
        console.log("It's a Tie!");
    }
}

const humanPick = getHumanChoice()
console.log(humanPick)
const computerPick = getComputerChoice()
console.log(computerPick)

playRound(humanPick, computerPick)
