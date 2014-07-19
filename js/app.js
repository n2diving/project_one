var tttApp = angular.module('TicTacToe', []);

tttApp.controller('tttController', function ($scope) {

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
  
 

  $scope.clicked = function (x,y,mark){
    alert(x + ", " + y);
   
    if(clicked) {
      $scope.playerMove = function(counter) {
      counter = 1
        if((counter % 2) === 0) {
          playerMove = "Player1";
        }
        else {
          playerMove = "Player2";
        };
      counter++;
      console.log('counter');
    }
   };
  
  
  }


  $scope.newBoard($scope.sizeBox);

//   $scope.collection = ["Item 1", "Item 2"];

//   $scope.selectedIndex = 0; // Whatever the default selected index is, use -1 for no selection

//   $scope.itemClicked = function ($index) {
//     $scope.selectedIndex = $index;
//   };
// }
  
});