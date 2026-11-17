function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Scores live at the top level so every function (and the display) can see them
let humanScore = 0
let computerScore = 0
let gameOver = false
const WINNING_SCORE = 5

// ---------- Build the UI with DOM methods ----------

const rockBtn = document.createElement("button")
const paperBtn = document.createElement("button")
const scissorsBtn = document.createElement("button")

rockBtn.textContent = "Rock"
paperBtn.textContent = "Paper"
scissorsBtn.textContent = "Scissors"

const buttonContainer = document.createElement("div")
buttonContainer.append(rockBtn, paperBtn, scissorsBtn)

const roundResult = document.createElement("div")   // "You win! Rock beats Scissors"
const scoreDisplay = document.createElement("div")  // running score
const winnerDisplay = document.createElement("div") // final winner announcement

document.body.append(buttonContainer, roundResult, scoreDisplay, winnerDisplay)

updateScore()

// ---------- Game logic ----------

function playRound(humanChoice, computerChoice) {
    if (gameOver) return

    let message

    if (humanChoice === "rock" && computerChoice === "scissors") {
        message = "You win! Rock beats Scissors"
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        message = "Computer wins! Rock beats Scissors"
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        message = "You win! Scissors beat Paper"
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        message = "Computer wins! Scissors beat Paper"
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        message = "You win! Paper beats Rock"
        humanScore++
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        message = "Computer wins! Paper beats Rock"
        computerScore++
    } else {
        message = "It's a tie!"
    }

    roundResult.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. ${message}`
    updateScore()
    checkForWinner()
}

function updateScore() {
    scoreDisplay.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`
}

function checkForWinner() {
    if (humanScore === WINNING_SCORE) {
        winnerDisplay.textContent = "You won the game!!!"
        endGame()
    } else if (computerScore === WINNING_SCORE) {
        winnerDisplay.textContent = "The computer won the game!!!"
        endGame()
    }
}

function endGame() {
    gameOver = true
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true
}

// ---------- Event listeners ----------

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
})

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
})

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
})