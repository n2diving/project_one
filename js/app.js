var gameApp = angular.module('gameApp', ['firebase']);

gameApp.controller('gameController', function ($scope, $firebase) {

//the firebase object needed to sync up
  $scope.boardContainer = {
    boardArray: $scope.board,
    playerTurn: $scope.player1Turn,
    p1Moves: $scope.player1moves,
    p2Moves: $scope.player2moves
  };

  $scope.sizeBox = 3;
  $scope.player1Turn = true;

  $scope.newBoard = function(size) {
    $scope.board = [
      {win: 1, status: 'active'},
      {win: 2, status: 'active'},
      {win: 4, status: 'active'},
      {win: 8, status: 'active'},
      {win: 16, status: 'active'},
      {win: 32, status: 'active'},
      {win: 64, status: 'active'},
      {win: 128, status: 'active'},
      {win: 256, status: 'active'},
    ];
};



  $scope.player1moves = 0;
  $scope.player2moves = 0;
  $scope.boardCheck = [];
  // $scope.boxstatus = 'active';
  // $scope.thisIsTheOne = function(box) {
  //   $scope.player1moves += box;
  //   console.log($scope.player1moves);
  // }

  // $scope.classSet = function(whatever, cell) {
  //   return (whatever & cell) == cell;
  // }
  

  $scope.cluster = function(cell,player) {
    if($scope.board[cell].status == 'active') {
      if($scope.player1Turn) {
        $scope.player1moves = $scope.player1moves + $scope.board[cell].win;
        $scope.board[cell].status = 'p1';
        console.log('Player 1');
        console.log("this is the player1 moves " + $scope.player1moves);
        $scope.win(cell);
      }
      else {
        $scope.player2moves = $scope.player2moves + $scope.board[cell].win;
        $scope.board[cell].status = 'p2';
        console.log('Player 2');
        console.log("this is the player2 moves " + $scope.player2moves);
        $scope.win(cell);

      }
      $scope.player1Turn = !$scope.player1Turn;
    }
    else {
      alert('not available');
    }
    $scope.tie();

  };


  $scope.tie = function() {
    var count = 0;
    for(var i = 0; i < $scope.board.length; i++) {
      if($scope.board[i].status != 'active') {
        count += 1;
      }
    }
    if(count == 9) {
      alert('looks like you guys tied');
      $scope.reset();
    }
  };



    $scope.bWin = [  
      {check: 7, d: 'you win across the top!'},
      {check: 56, d: 'you win across the middle!'},
      {check: 448, d: 'you win across the bottom!'},
      {check: 73, d: 'you win down the left!'},
      {check: 146, d: 'you win down the middle!'},
      {check: 292, d: 'you win down the right!'},
      {check: 273, d: 'you win down diagonally!'},
      {check: 84, d: 'you win up diagonally!'},
      ];

  $scope.win = function() {
      for(var bwIndex in $scope.bWin){
         var bw = $scope.bWin[bwIndex];
         if (($scope.player1moves & bw.check) == bw.check) {
           alert("Player 1, " + bw.d);
           $scope.p1winCounter += 1;
           console.log("p1 win count: " + $scope.p1winCounter);
           $scope.reset();
         }
        };

      for(var bwIndex in $scope.bWin){
         var bw = $scope.bWin[bwIndex];
         if (($scope.player2moves & bw.check) == bw.check) {
           alert("Player 2, " + bw.d);
           $scope.p2winCounter += 1;
           console.log("p2 win count: " + $scope.p2winCounter);
           $scope.reset();
         }
        };

  };

  $scope.p1winCounter = 0;
  $scope.p2winCounter = 0;

  $scope.reset = function() {
    $scope.player1moves = 0;
    $scope.player2moves = 0;
    $scope.newBoard($scope.sizeBox);
  };

  $scope.newBoard($scope.sizeBox);


  var gameRef = new Firebase("https://glaring-fire-4974.firebaseIO.com");
  $scope.player1Turn = $firebase(new Firebase('https://glaring-fire-4974.firebaseIO.com/player1Turn'));
  $scope.remoteBoardContainer = $firebase(new Firebase('https://glaring-fire-4974.firebaseIO.com/remoteBoardContainer'));


  $scope.remoteBoardContainer.$bind($scope, 'boardContainer');
  // $scope.$watch('boardContainer', function() {
  //   console.log('The times they are a changing!');
  // }) ;


});

