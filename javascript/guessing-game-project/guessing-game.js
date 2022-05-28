secretNumber = 0;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkGuess(guess) {
    guess = Number(guess);

    if (guess === secretNumber) {
        console.log("Correct!");
        return true;
    } else {
        if (guess > secretNumber) {
            console.log("Too high.");
        } else if (guess < secretNumber) {
            console.log("Too low.");
        } else {
            console.log("Input is not a number.");
        }
        return false;
    }
}

function askGuess() {
    rl.question("Enter a guess: ", (answer) => {
        if (checkGuess(answer)) {
            console.log("You win!");
            rl.close();
        } else {
            askGuess();
        }
    });
}

function askRange() {
    let min, max;

    rl.question("Enter a min number: ", handleMin);

    function handleMin(num) {
        min = Number(num);
        rl.question("Enter a max number: ", handleMax);
    }

    function handleMax(num) {
        max = Number(num);
        console.log(`I am thinking of a number between ${min} and ${max}...`);
        secretNumber = randomInRange(min, max);
        askGuess();
    }
}

askRange();