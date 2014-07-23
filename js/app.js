var gameApp = angular.module('TicTacToe', []);

gameApp.controller('gameController', function ($scope) {

    $scope.sizeBox = 3;
    $scope.player1Turn = true;
    // var x = $scope.x;
    // var y = $scope.y;

  $scope.newBoard = function(size) {
    $scope.board = [];

    for (i=0; i<size; ++i ) {
      var colset = [];

      for (j=0; j<size; ++j ) {
        colset.push({
          // x:(j + 1),
          // y:(i + 1),
          // active:true
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
      player1moves[x] = pos;
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
      console.log('this is the moves ' + player2moves);
      console.log('this is the pos keys ' + pos.keys);
      console.log('this is the scope index ' + $scope.index);
      // console.log($scope.board);

    }
    $scope.player1Turn = !$scope.player1Turn;
  };
  

  // $scope.win = function() {


  //   for(i=0, i < array.length-1, i++) {
  //     array[i].status == 'p1'
  //   };

  // };



  $scope.newBoard($scope.sizeBox);


});