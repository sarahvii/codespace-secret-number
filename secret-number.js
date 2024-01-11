// declare variables
const guessLimit = 10;
let secretNumber = null;
let attempts = 0;

// function to generate a random number between 1 - 100
const generateSecretNumber = () => Math.floor(Math.random() * 100) + 1;

// function to start game
function startGame() {
    secretNumber = generateSecretNumber();
    attempts = 0;

    document.getElementById('feedback').innerText = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('gameContainer').style.display = 'block';
}

// function to check if guess is correct
const checkGuess = (guess) => {
    if (guess === secretNumber) {
        document.getElementById('feedback').innerText = `Congratulations! You've guessed correctly! The secret number was ${secretNumber}.`;
        return;
    } else if (guess > secretNumber) {
        document.getElementById('feedback').innerText = 'Your guess was too high. Try again';
    } else if (guess < secretNumber) {
        document.getElementById('feedback').innerText = 'Your guess was too low. Try again';
    }

    attempts ++;

    if (attempts >= guessLimit) {
        document.getElementById('feedback').innerText = `Game over :( You have no attempts left. The secret number was ${secretNumber}.`;
    } else {
        document.getElementById('feedback').innerText += ` You have ${guessLimit - attempts} attempts left.`;
    }
}

// add event listener to user guess form
document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // convert string input to number
    let guess = parseInt(document.getElementById('guessInput').value);

    // input validation
    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
        document.getElementById('feedback').innerText = 'Please enter a valid number between 1 - 100';
        return;
    }

    // call check guess function
    checkGuess(guess)
    })

// event listener to call start game function when start button is clicked
document.getElementById('startGameButton').addEventListener('click', startGame); 






