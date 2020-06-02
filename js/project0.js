const checkForWin = function (selector) {
  // if 3 in a row, strike through & display "X Wins!" etc
  if (selector === 'Tie') {
    console.log("It's a " + selector);
    $('.board').delay(500).fadeOut(300, function () {
      $('.space2').delay(600).fadeIn(300, function () {
        $('.space2').addClass('draw').text("It's a Draw!")
    }).show()}).hide(0);
  } else {
    console.log(selector + ' is the winner!');
    if (selector === 'circle') {
    $('.board').delay(500).fadeOut(300, function () {
      $('.space2').delay(600).fadeIn(300, function () {
        $('.space2').addClass('circle2').text('WINNER!')
    }).show()}).hide(0); // hide requires argument if using delay for some reason... // nesting the function means that it won't start the next animation until the current animation is complete.
    } else {
      $('.board').delay(500).fadeOut(300, function () {
        $('.space2').delay(600).fadeIn(300, function () {
          $('.space2').addClass('xmark2').text('WINNER!')
      }).show()}).hide(0);
    };
  };
  $('#buttonX').text(`X | Score: ${scoreX}`); // Updates scores in UI
  $('#buttonO').text(`O | Score: ${scoreCirc}`);
};


const render = function () {
  // set game back to default but keep current score.
  $('#buttonX').addClass('playerShadow');
  $('#buttonO').removeClass('playerShadow');
  $('.space2').hide()
};

$(document).ready(function () {
  // render first to add playershadow etc
  render();

  // if any span's are clicked
  $('span').on('click', function () {
    if (!(this.className.includes('xmark')) && !(this.className.includes('circle'))) {
      let xOrO = game.naughtOrCross();
      let indexClick = $('span').index(this); // get index of span that's been clicked.
      game.checkWinOrDraw(indexClick, currentSelector);
      $(this).addClass(`${xOrO}`).slideDown('slow');
    };
  });

  // determine player 1 & 2's character
  $('#buttonX').on('click', function () {
    if (turnCount <= 0) {
      game.whosFirst('buttonX');
      $('#buttonX').addClass('playerShadow');
      $('#buttonO').removeClass('playerShadow');
    };
  });
  $('#buttonO').on('click', function () {
    if (turnCount <= 0) {
      game.whosFirst('buttonO');
      $('#buttonO').addClass('playerShadow');
      $('#buttonX').removeClass('playerShadow');
    };
  });

  // Restart Game
  $('.restart_game_button').on('click', function () {
    $("td span").css('background', '');
    $("td span").removeClass('xmark circle');
    $(".start_game").addClass("animate__animated animate__bounce");
    turnCount = 0;
    currentMoves = {}; // clears moves from previous round
    if ($('#buttonO').hasClass('playerShadow')) { // check which button is selected
      xMarksTurn = false;
    } else {
      xMarksTurn = true;
    }
    $('.board').removeClass('space2');
    $('.board').show();
    $('.space2').hide();
    $('.space2').removeClass('circle2 xmark2 draw').text('');

  });

});
