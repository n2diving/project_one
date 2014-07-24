var gameApp = angular.module('gameApp', ['firebase']);

gameApp.controller('gameController', function ($scope, $firebase) {

  var gameRef = new Firebase("https://glaring-fire-4974.firebaseIO.com");

  $scope.player1Turn = $firebase(new Firebase('https://glaring-fire-4974.firebaseIO.com' + '/player1Turn'));
  $scope.remoteBoardContainer = $firebase(new Firebase('https://glaring-fire-4974.firebaseIO.com' + '/remoteBoardContainer'));
  // $scope.remoteBoardContainer.$bind($scope, 'boardContainer: boardArray');
  $scope.$watch('board', function() {
    console.log('The times they are a changing!');
  }) ;

  $scope.boardContainer = {
    boardArray: $scope.board,
    playerTurn: $scope.player1Turn,
    p1Moves: $scope.player1moves,
    p2Moves: $scope.player2moves
  }

  $scope.sizeBox = 3;
  $scope.player1Turn = true;

  // var powerUp = function(size) {
  //   for (n=0; n<4; ++n) {
  //   return Math.pow(2, n)
  //   console.log(powerUp);

  //   }
  // }


  $scope.newBoard = function(size) {
    $scope.board = [];

    for (i=0; i<size; ++i ) {
      var colset = [];

      for (j=0; j<size; ++j ) {
        colset.push({
          x:(j + 1),
          y:(i + 1),
          // win: powerUp($scope.sizeBox),
          status: 'active'
  });
      }
      $scope.board.push(colset);
    } 
  };

  $scope.pc = 0;
  var player1moves = [];
  var player2moves = [];


  $scope.cluster = function(pos,player) {
    var x = 0;
    var y = 0;
    if($scope.player1Turn) {
      player1moves.push(pos);
      pos.status = 'p1';
      console.log('Player 1');
      // console.log(pos);
      console.log(player1moves);
      console.log('this is the pos keys' + pos.keys);
      console.log('this is the scope index' + $scope.index);
      // console.log($scope.board);
      // console.log(player1moves[0][0]);
      x++
    }
    else {
      player2moves.push(pos);
      pos.status = 'p2';
      console.log('Player 2');
      // console.log(pos);
      console.log(player2moves);
      console.log('this is the pos keys ' + pos.keys);
      console.log('this is the scope index ' + $scope.index);
      // console.log($scope.board);

    }
    $scope.player1Turn = !$scope.player1Turn;
  };


    // $scope.win = function() {
      // for(var boxIndex = $scope.box)

    //   for(i=0, i < $scope.sizeBox, i++) {
    //       
    //    array[i].status == 'p1'
    //   };

    // };



  $scope.newBoard($scope.sizeBox);


});

