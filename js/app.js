var gameApp = angular.module('gameApp', ['firebase']);

gameApp.controller('gameController', function ($scope, $firebase) {

  // var gameRef = new Firebase("https://glaring-fire-4974.firebaseIO.com");

  // $scope.player1Turn = $firebase(new Firebase('https://glaring-fire-4974.firebaseIO.com' + '/player1Turn'));
  // $scope.remoteBoardContainer = $firebase(new Firebase('https://glaring-fire-4974.firebaseIO.com' + '/remoteBoardContainer'));
  // // $scope.remoteBoardContainer.$bind($scope, 'boardContainer: boardArray');
  // $scope.$watch('board', function() {
  //   console.log('The times they are a changing!');
  // }) ;

  // $scope.boardContainer = {
  //   boardArray: $scope.board,
  //   playerTurn: $scope.player1Turn,
  //   p1Moves: $scope.player1moves,
  //   p2Moves: $scope.player2moves
  // }

  $scope.sizeBox = 3;
  $scope.player1Turn = true;

  $scope.newBoard = function(size) {
    // $scope.board = [];
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

  var player1moves = [];
  var player2moves = [];


  $scope.cluster = function(pos,player) {
    if($scope.player1Turn) {
      player1moves.push(pos.win);
      pos.status = 'p1';
      console.log('Player 1');
      console.log(player1moves);
      console.log(pos);
    }
    else {
      player2moves.push(pos.win);
      pos.status = 'p2';
      console.log('Player 2');
      console.log(player2moves);
    }
    $scope.player1Turn = !$scope.player1Turn;
  };


  $scope.win = function() {
    $scope.bWin = [  
      {check: 7, d: 'you win across the top!'},
      {check: 56, d: 'you win across the middle!'},
      {check: 448, d: 'you win across the bottom!'},
      {check: 73, d: 'you win down the left!'},
      {check: 146, d: 'you win down the middle!'},
      {check: 282, d: 'you win down the right!'},
      {check: 273, d: 'you win down diagonally!'},
      {check: 84, d: 'you win up diagonally!'},
      ];

      for(var bwIndex in $scope.bWin){
         var bw = $scope.bWin[bwIndex];
         if (($scope.player1moves & bw.check) == bw.check) {
           alert("Player 1, " + bw.d);
           $scope.win();
         }
        };

      for(var bwIndex in $scope.bWin){
         var bw = $scope.bWin[bwIndex];
         if (($scope.player2moves & bw.check) == bw.check) {
           alert("Player 2 has " + bw.d);
           $scope.win();
         }
        };
  };


  $scope.newBoard($scope.sizeBox);


});

