var tttApp = angular.module('TicTacToe', []);

tttApp.controller('tttController', function ($scope) {

$scope.sizeBox = 6;


  $scope.newBoard = function(size) {
    $scope.board = [];
      for (i=0; i<size; ++i ) {
        var colset = []; 
        for (j=0; j<size; ++j ) {
          colset.push({name: 'c' + i + 'r' +j});
        }
      $scope.board.push(colset)
      } 
  };

  $scope.newBoard($scope.sizeBox);

   $scope.clicked = function(t) {
    if(t = true) {
      t = false;
    }
    else {
      t = true;
    }
   }

//   $scope.collection = ["Item 1", "Item 2"];

//   $scope.selectedIndex = 0; // Whatever the default selected index is, use -1 for no selection

//   $scope.itemClicked = function ($index) {
//     $scope.selectedIndex = $index;
//   };
// }
  
});