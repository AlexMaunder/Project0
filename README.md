# Project0 A "Naughts & Crosses" Game

https://alexmaunder.github.io/Project0/


## Motivation
To improve skills in DOM manipulation using jQuery and develop scalable code.

## Screenshots
![image of gameplay](https://github.com/AlexMaunder/Project0/blob/master/img/game.png)

## Tech/ Framework Used

Written in HTML/ CSS/ Javascript/ jQuery

Images have been generated using Scalable Vector Graphics

## Features
Keep player score

Change Characters

Detect Win/Draw and display appropriate graphic


## Code Example

```
checkWinOrDraw: function (indexClick, selector) {
  let winner = null;
  currentMoves[indexClick] = selector; // add index as object key and circle or x as value.
  if (Object.keys(currentMoves).length < 3) { // checks how many objects in currentMoves
    return
  // check horizontal winners
  } else if (game.equals(currentMoves[0], currentMoves[1], currentMoves[2]) || game.equals(currentMoves[3], currentMoves[4], currentMoves[5]) || game.equals(currentMoves[6], currentMoves[7], currentMoves[8])) {
    console.log('a true case matched - horizontal')

```

## How to Play

The game is played on a grid that's 3 squares by 3 squares.
Player 1 is X, Player 2 is O. Players take turns putting their marks in empty squares.

The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.

When all 9 squares are full, the game is over.
