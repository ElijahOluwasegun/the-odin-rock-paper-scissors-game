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

/* 
Step 5: Solution

const humanPick = getHumanChoice()
console.log(humanPick)
const computerPick = getComputerChoice()
console.log(computerPick)

playRound(humanPick, computerPick) 

*/

function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {

        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

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

    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    
    if (humanScore > computerScore) {
        console.log("You win!!!")
        console.log("Your score:", humanScore, ", Computer Score: ", computerScore)
    } 
    else if (humanScore < computerScore) {
        console.log("The computer wins!!!")
        console.log("Your score:", humanScore, ", Computer Score: ", computerScore)
    } 
    
    else {
        console.log ("It's a Tie!")
        console.log("Your score:", humanScore, ", Computer Score: ", computerScore)
    }
}

playGame()
