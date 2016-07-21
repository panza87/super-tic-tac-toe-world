var menu = {
    onePlayer: true,
    twoPlayer: false
}

var winnerFound = false;

$(document).keydown(function(e) {
    if (e.keyCode === 40 && menu.onePlayer === true) {
        $('#one').removeClass("active");
        $('#two').addClass("active");
        menu.onePlayer = false;
        menu.twoPlayer = true;
    }
    if (e.keyCode === 38 && menu.twoPlayer === true) {
        $('#one').addClass("active");
        $('#two').removeClass("active");
        menu.onePlayer = true;
        menu.twoPlayer = false;
    }
    if (e.keyCode === 13 && menu.onePlayer === true) {
        console.log("Start 1 player game");
        coinAudio.play();
        closeMenu(onePlayer.takeTurn);
        $("#frame").toggle();
        $(".gameBoard").fadeIn(1000);
    } else if (e.keyCode === 13 && menu.twoPlayer === true) {
        console.log("Start 2 player game");
        coinAudio.play();
        closeMenu(twoPlayer.takeTurn);
        $("#frame").toggle();
        $(".gameBoard").fadeIn(1000);
    }
});

$("#menu ul li").hover(
  function() {
    console.log(this);
    $(this).addClass("active");
  }, function() {
    $(this).removeClass("active");
  }
);

var closeMenu = function(option) {
    $(document).on("click", ".inner", option);
    $('#menu').fadeOut();
}

var gameBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var freeCells = [];

var turnCount = 0;

var playerOne = {
    name: "Star",
    won: 0,
    image: "images/star.png"
}

var playerTwo = {
    name: "Mushroom",
    won: 0,
    image: "images/mushroom.png"
}

var twoPlayer = {
    takeTurn: function() {
        if (turnCount % 2 === 0) {

            for (var i = 0; i < gameBoard.length; i++) {
                for (var j = 0; j < gameBoard[i].length; j++) {
                    $yourCell = $(this).parent()[0];
                    if (parseInt($yourCell.id) === gameBoard[i][j]) {
                        updateBoard($yourCell, playerOne, i, j);
                    }
                }
            }
        } else {

            for (var i = 0; i < gameBoard.length; i++) {
                for (var j = 0; j < gameBoard[i].length; j++) {
                    $yourCell = $(this).parent()[0];
                    if (parseInt($yourCell.id) === gameBoard[i][j]) {
                        updateBoard($yourCell, playerTwo, i, j);
                    }
                }
            }
        }
    }
}

var onePlayer = {
    takeTurn: function() {
        if (turnCount % 2 === 0) {

            for (var i = 0; i < gameBoard.length; i++) {
                for (var j = 0; j < gameBoard[i].length; j++) {
                    $yourCell = $(this).parent()[0];
                    if (parseInt($yourCell.id) === gameBoard[i][j]) {
                        updateBoard($yourCell, playerOne, i, j);
                        if (winnerFound === false) {
                            onePlayer.computerTurn();
                        }
                    }
                }
            }
        }
    },
    computerTurn: function() {
        setTimeout(function() {

            for (var i = 0; i < gameBoard.length; i++) {
                for (var j = 0; j < gameBoard[i].length; j++) {
                    if (gameBoard[i][j] !== "Star" && gameBoard[i][j] !== "Mushroom") {
                        freeCells.push(gameBoard[i][j]);
                    }
                }
            }
            var randomNumber = Math.floor(Math.random() * freeCells.length);
            var randomCell = freeCells[randomNumber];
            var yourCellId = "#" + randomCell;
            for (var i = 0; i < gameBoard.length; i++) {
                for (var j = 0; j < gameBoard[i].length; j++) {
                    if (randomCell === gameBoard[i][j]) {
                        updateBoard(yourCellId, playerTwo, i, j);
                    }
                }
            }
            freeCells = [];

        }, 3200);
    }
}
var updateBoard = function(yourCell, player, i, j) {
    gameBoard[i][j] = player.name;
    $(yourCell).css("background-image", "url(" + player.image + ")");
    var yourId = $(yourCell).children(".inner");
    console.log(turnCount);
    if (parseInt(yourCell.id) === 1 || yourCell === "#1") {
      var lakituLeft = window.innerWidth / 2 - 110;
      $("#lakitu").animate({
        left: lakituLeft
      }, 1700);
      setTimeout(function() {
        $(yourId).animate({
          top: "-40px"
        }, 200)
      }, 1900);
      setTimeout(function() {
        $("#lakitu").animate({
          left: window.innerWidth + 70
        }, 1030, "linear");
        $(yourId).animate({
          left: window.innerWidth - lakituLeft + 70
        }, 1030, "linear");
      }, 2100)
    }
    if (parseInt(yourCell.id) === 2 || yourCell === "#2") {
      var lakituLeft = window.innerWidth / 2 - 40;
      $("#lakitu").animate({
        left: lakituLeft
      }, 1700);
      setTimeout(function() {
        $(yourId).animate({
          top: "-40px"
        }, 200)
      }, 1900);
      setTimeout(function() {
        $("#lakitu").animate({
          left: window.innerWidth + 70
        }, 1030, "linear");
        $(yourId).animate({
          left: window.innerWidth - lakituLeft + 70
        }, 1030, "linear");
      }, 2100)
    }
    if (parseInt(yourCell.id) === 3 || yourCell === "#3") {
      var lakituLeft = window.innerWidth / 2 + 30;
      $("#lakitu").animate({
        left: lakituLeft
      }, 1700);
      setTimeout(function() {
        $(yourId).animate({
          top: "-40px"
        }, 200)
      }, 1900);
      setTimeout(function() {
        $("#lakitu").animate({
          left: window.innerWidth + 70
        }, 1030, "linear");
        $(yourId).animate({
          left: window.innerWidth - lakituLeft + 70
        }, 1030, "linear");
      }, 2100)
    }
    if (parseInt(yourCell.id) === 4 || yourCell === "#4") {
      var piranhaLeft = window.innerWidth / 2;
      $("#piranha").css({
        left: "-1000px"
      })
      $("#piranha").animate({
        left: piranhaLeft - 916
      }, 1000, function() {
        $("#piranha").animate({
          left: "-1000px"
        }, 1000)
      })
      setTimeout(function() {
        yourId.toggle();
      }, 1000)
    }
    if (parseInt(yourCell.id) === 5 || yourCell === "#5") {
      var piranhaLeft = window.innerWidth / 2;
      $("#piranha").css({
        left: "-1000px"
      })
      $("#piranha").animate({
        left: piranhaLeft - 846
      }, 1000, function() {
        $("#piranha").animate({
          left: "-1000px"
        }, 1000)
      })
      setTimeout(function() {
        yourId.toggle();
      }, 1000)
    }
    if (parseInt(yourCell.id) === 6 || yourCell === "#6") {
      var piranhaLeft = window.innerWidth / 2;
      $("#piranha").css({
        left: "-1000px"
      })
      $("#piranha").animate({
        left: piranhaLeft - 776
      }, 1000, function() {
        $("#piranha").animate({
          left: "-1000px"
        }, 1000)
      })
      setTimeout(function() {
        yourId.toggle();
      }, 1000)
    }
    if (parseInt(yourCell.id) === 7 || yourCell === "#7") {
      var marioLeft = window.innerWidth / 2 - 110;
      $("#mario").css("left", marioLeft);
      $("#mario").addClass("mario-jump");
      yourId.addClass("bump");
      setTimeout(function() {
        $("#mario").removeClass("mario-jump");
      }, 1000);
    }
    if (parseInt(yourCell.id) === 8 || yourCell === "#8") {
      var marioLeft = window.innerWidth / 2 - 40;
      $("#mario").css("left", marioLeft);
      $("#mario").addClass("mario-jump");
      yourId.addClass("bump");
      setTimeout(function() {
        $("#mario").removeClass("mario-jump");
      }, 1000);
    }
    if (parseInt(yourCell.id) === 9 || yourCell === "#9") {
      var marioLeft = window.innerWidth / 2 + 30;
      $("#mario").css("left", marioLeft);
      $("#mario").addClass("mario-jump");
      yourId.addClass("bump");
      setTimeout(function() {
        $("#mario").removeClass("mario-jump");
      }, 1000);
    }
    setTimeout(function() {
        yourId.css('visibility', 'hidden');
    }, 3000);
    turnCount++;
    checkForWin(player);
}

var checkForWin = function(player) {
    if (turnCount % 2 === 0) {
      $(".current-player").css("background-image", "url('images/star.png')");
    } else {
      $(".current-player").css("background-image", "url('images/mushroom.png')");
    }
    if (gameBoard[0][0] === player.name && gameBoard[0][1] === player.name && gameBoard[0][2] === player.name) {
        console.log(player.name + " Wins!");
        player.won++;
        winnerFound = true;
        clearBoard(player);
    } else if (gameBoard[1][0] === player.name && gameBoard[1][1] === player.name && gameBoard[1][2] === player.name) {
        console.log(player.name + " Wins!");
        player.won++;
        winnerFound = true;
        clearBoard(player);
    } else if (gameBoard[2][0] === player.name && gameBoard[2][1] === player.name && gameBoard[2][2] === player.name) {
        console.log(player.name + " Wins!");
        player.won++;
        winnerFound = true;
        clearBoard(player);
    } else if (gameBoard[0][0] === player.name && gameBoard[1][0] === player.name && gameBoard[2][0] === player.name) {
        console.log(player.name + " Wins!");
        player.won++;
        winnerFound = true;
        clearBoard(player);
    } else if (gameBoard[0][1] === player.name && gameBoard[1][1] === player.name && gameBoard[2][1] === player.name) {
        console.log(player.name + " Wins!");
        player.won++;
        winnerFound = true;
        clearBoard(player);
    } else if (gameBoard[0][2] === player.name && gameBoard[1][2] === player.name && gameBoard[2][2] === player.name) {
        console.log(player.name + " Wins!");
        player.won++;
        winnerFound = true;
        clearBoard(player);
    } else if (gameBoard[0][0] === player.name && gameBoard[1][1] === player.name && gameBoard[2][2] === player.name) {
        console.log(player.name + " Wins!");
        player.won++;
        winnerFound = true;
        clearBoard(player);
    } else if (gameBoard[0][2] === player.name && gameBoard[1][1] === player.name && gameBoard[2][0] === player.name) {
        console.log(player.name + " Wins!");
        player.won++;
        winnerFound = true;
        clearBoard(player);
    } else if (turnCount === 9) {
        winnerFound = false;
        clearBoard();
    }
};

clearBoard = function(player) {
    $("#mario-running").addClass("mario-run");
    setTimeout(function() {
      loopAudio.pause();
      clearAudio.play();
      setTimeout(function() {
        loopAudio.play();
      }, 8000)
    }, 2100);
    setTimeout(function() {
      $("#flag").animate({
        bottom: "55px"
      }, 600, "linear");
      if (player.name === "Star"){
        $("#flag").css("background-image", "url('images/star-flag.gif')");
      } else {
        $("#flag").css("background-image", "url('images/mushroom-flag.gif')");
      }
      $("#flag").animate({
        bottom: "291px"
      });
      $("#playerOne .won").text("x" + playerOne.won);
      $("#playerTwo .won").text("x" + playerTwo.won);
    }, 2050)
    turnCount = 0;
    gameBoard = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    var hardReset = function() {
      $('#winner .glowBox h2').text(theWinner + " Wins!");
      $('#winner').css("display", "flex");
      $(".cell").css("background-image", "url('images/mushroom.png')");
      $(".inner").removeClass("bump");
      $(".inner").removeClass("flyaway");
      $(".inner").css("display", "block");
      $(".inner").css("visibility", "visible");
      $(".current-player").css("background-image", "url('images/star.png')");
      setTimeout(function() {
        $("#mario-running").removeClass("mario-run");
        $(".inner").css ({
          top: 0,
          left: 0
        })
      }, 1000);
    }

    if (winnerFound === false) {
      setTimeout(function() {
        theWinner = "It's a draw! No-one";
        hardReset();
      }, 3001)
    } else {
      setTimeout(function() {
        var theWinner = player.name;
        hardReset();
      }, 3001)
      var theWinner = player.name
    }

};

// $(".cloud1").animate({
//   left: 2000
// }, 50000);
// $(".cloud1").css
// console.log($(".cloud1").css("left"));
// var yourLeft = parseInt($(".cloud1").css("left"));
// console.log(yourLeft);
// if (yourLeft > 1000) {
//   $(".cloud1").css("left", "-100px");
// }

function loopAnimation1(doReset) {
    var $el1 = $(".cloud1");
    var randomTop1 = Math.floor(Math.random() * 400);
    if (doReset) {
       $el1.css({
         left: "-=1730px",
         top: randomTop1
       });
    }
    $el1.animate({
        "left": "+=1730px"
    }, 50000, function() {
        setTimeout(function() {
            loopAnimation1(true);
        }, 1);
    });
}

function loopAnimation2(doReset) {
    var $el2 = $(".cloud2");
    var randomTop2 = Math.floor(Math.random() * 400);
    if (doReset) {
       $el2.css({
         left: "-=1730px",
         top: randomTop2
       });
    }
    $el2.animate({
        "left": "+=1730px"
    }, 70000, function() {
        setTimeout(function() {
            loopAnimation2(true);
        }, 1);
    });
}

function loopAnimation3(doReset) {
    var $el3 = $(".cloud3");
    var randomTop3 = Math.floor(Math.random() * 400);
    if (doReset) {
       $el3.css({
         left: "-=1730px",
         top: randomTop3
       });
    }
    $el3.animate({
        "left": "+=1730px"
    }, 120000, function() {
        setTimeout(function() {
            loopAnimation3(true);
        }, 1);
    });
}

loopAnimation1(false);
loopAnimation2(false);
loopAnimation3(false);

$('.ghost-button').on("click", function(e) {
  e.preventDefault();
  $("#winner").toggle();
  $("#frame").toggle();
  $(".gameBoard").toggle();
  $("#menu").fadeIn();
})

$("#one").on("click", function() {
  closeMenu(onePlayer.takeTurn);
  $("#frame").toggle();
  $(".gameBoard").fadeIn(1000);
  coinAudio.play();
})
$("#two").on("click", function() {
  closeMenu(twoPlayer.takeTurn);
  $("#frame").toggle();
  $(".gameBoard").fadeIn(1000);
  coinAudio.play();
})

var loopAudio = new Audio("SuperMarioBros-remaster.mp3");
var coinAudio = new Audio("smw_coin.wav");
var clearAudio = new Audio("smw_course_clear.wav");
loopAudio.loop = true;

$(document).on("load", loopAudio.play());
