console.log("Hello World")

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber)
    if (randomNumber === 0 ) {
        console.log("rock")
    } else if (randomNumber === 1){
        console.log("paper")
    } else {
        console.log("scissors")
    }
}

getComputerChoice()

function getHumanChoice() {
    let userChoice = prompt("rock, paper, scissors? ")
    console.log(userChoice)
}

getHumanChoice()