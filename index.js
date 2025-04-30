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

console.log(getComputerChoice())

function getHumanChoice() {
    let userChoice = prompt("rock, paper, scissors? ").toLowerCase()
    return userChoice
}

console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0
