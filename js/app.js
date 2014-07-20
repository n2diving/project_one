var gameApp = angular.module('TicTacToe', []);

gameApp.controller('gameController', function ($scope) {

$scope.sizeBox = 4;


  $scope.newBoard = function(size) {
    $scope.board = [];
      
      for (i=0; i<size; ++i ) {
        var colset = [];

        for (j=0; j<size; ++j ) {
          colset.push({
            x:(j + 1),
            y:(i + 1)

          });
        }
      $scope.board.push(colset);
      } 
  };
  
  $scope.pc = 0;
  $scope.player1Turn = true;
  var player1moves = [];
  var player2moves = [];

  $scope.cluster = function(pos,player) {
    if($scope.player1Turn) {
      player1moves.push(pos);
      $scope.board[pos] = "p1";
      console.log(player1moves);
    }
    else {
      player2moves.push(pos);
      $scope.board[pos] = "p2";
      console.log(player2moves);
    }
  }

  // console.log(player1moves)
 

  // $scope.clicked = function (x,y,mark){
  //   alert(x + ", " + y);
   
  //   if(clicked) {
  //     $scope.playerMove = function(counter) {
  //     counter = 1
  //       if((counter % 2) === 0) {
  //         playerMove = "Player1";
  //       }
  //       else {
  //         playerMove = "Player2";
  //       };
  //     counter++;
  //     console.log('counter');
  //   }
  //  };
  
  
  // }


  $scope.newBoard($scope.sizeBox);

//   $scope.collection = ["Item 1", "Item 2"];

//   $scope.selectedIndex = 0; // Whatever the default selected index is, use -1 for no selection

//   $scope.itemClicked = function ($index) {
//     $scope.selectedIndex = $index;
//   };
// }
  
});