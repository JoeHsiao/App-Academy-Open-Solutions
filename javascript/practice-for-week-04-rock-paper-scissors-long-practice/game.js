const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  // Your code here
  const strPattern = (ch, des) => {
    return `  Type '${ch}' ${des}`;
  }
  console.log(strPattern('r', "for Rock"));
  console.log(strPattern('p', "for Paper"));
  console.log(strPattern('s', "for Scissors"));
  console.log(strPattern('q', "to quit"));
  console.log(strPattern('h', "for a list of valid commands\n"));
}

function getWinner(move1, move2) {
  // Your code here
  if (VALID_MOVES[move1].winsAgainst === move2) {
    return 1;
  } else if (VALID_MOVES[move2].winsAgainst === move1) {
    return -1;
  } else {
    return 0;
  }
}

function getCPUMove() {
  // Your code here
  const validMoveKeys = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
  const cpu = validMoveKeys[randomIndex];
  return cpu;
}

function processMove(cmd, cpu) {
  // Your code here
  console.log(`You pick ${cmd}, computer picks ${cpu}.`);
  const strPattern = (str) => `You ${str}\n`;
  const res = getWinner(cmd, cpu);
  if (res === 1) {
    console.log(strPattern("win!"));
    wins++;
  } else if (res === -1) {
    console.log(strPattern("lose..."));
    losses++;
  } else {
    console.log(strPattern("tie."));
    ties++;
  }
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      printHelp();
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]) {
      const cpu = getCPUMove();
      processMove(cmd, cpu);
    } else {
      console.log("\nInvalid command.\n");
      printHelp();
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  printHelp();
  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};