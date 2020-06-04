let xMarksTurn = true;
let turnCount = 0; // start from turn 1
let currentMoves = {};
let currentSelector = '';
let winner = '';
let scoreX = 0;
let scoreCirc = 0;
let tie = 0;


const game = {  // use an object to keep code neatly grouped...

  // See if x or o is first player
  whosFirst: function (input) {
    if (input === 'buttonO') {
      xMarksTurn = false
    } else if (input === 'buttonX') {
      xMarksTurn = true
    } else { // means x is default first player
      xMarksTurn = true
    };
    return // return something here
  },

  // figure out if need to return x or o
  naughtOrCross: function (index) {
    if (xMarksTurn === true) { // if player 2's turn "Crosses"
      turnCount++;
      xMarksTurn = false;
      currentSelector = 'xmark'
      return 'xmark'
    } else { // player 1's turn "Naughts"
      turnCount++;
      xMarksTurn = true;
      currentSelector = 'circle'
      return 'circle'
    }
  },

  // function to check if a,b,c match, therefore a win
  equals: function (a, b, c) {
    if (a === b && b === c && a !== undefined) { // if true, update who won
      winner = a
      if (winner === 'xmark') {
        scoreX++;
        checkForWin(winner)
      } else {
        scoreCirc++;
        checkForWin(winner)
      };
    }
    return (a === b && b === c && a !== undefined)
  },

  // Keep index of moves to see who won/draw
  checkWinOrDraw: function (indexClick, selector) {
    let winner = null;
    currentMoves[indexClick] = selector; // add index as object key and circle or x as value.
    if (Object.keys(currentMoves).length < 3) { // checks how many objects in currentMoves
      return
    // check horizontal winners
    } else if (game.equals(currentMoves[0], currentMoves[1], currentMoves[2]) || game.equals(currentMoves[3], currentMoves[4], currentMoves[5]) || game.equals(currentMoves[6], currentMoves[7], currentMoves[8])) {
      console.log('a true case matched - horizontal')
    // check vertical winners
    } else if (game.equals(currentMoves[0], currentMoves[3], currentMoves[6]) || game.equals(currentMoves[1], currentMoves[4], currentMoves[7]) || game.equals(currentMoves[2], currentMoves[5], currentMoves[8])) {
      console.log('a true case matched - vertical')
    // check diagonal winners (left to right & right to left)
    } else if (game.equals(currentMoves[0], currentMoves[4], currentMoves[8]) || game.equals(currentMoves[2], currentMoves[4], currentMoves[6])) {
    console.log('a true case matched - diagonal')
    // if winner is null && no more moves, console.log 'Tie'
    } else if (Object.keys(currentMoves).length > 8) {
        tie++;
        checkForWin('Tie')
        return
    };
  }

};
