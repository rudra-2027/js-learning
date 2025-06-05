let randomNumber = (parseInt(Math.random() * 100 + 1));
const form = document.querySelector('.form')
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const reaminig = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1;
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)

    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter A valid Number")
    } else if (guess < 1) {
        alert("Please Enter A valid Number more than 1")

    } else if (guess > 100) {
        alert("Please Enter A valid Numbe less than 100")

    } else {
        prevGuess.push(guess)
        if (numGuess > 10 && numGuess > 0) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)

        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is Tooo low`)

    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`)
    }
}
function displayGuess(guess) {
    userInput.val = ''
    guessSlot.innerHTML += `${guess + ", "}`
    numGuess++;
    reaminig.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = (parseInt(Math.random() * 100 + 1));
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        reaminig.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;

    })
}
function endGame() {
    userInput.val = ""
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame"> Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}




