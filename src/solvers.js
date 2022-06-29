/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
var makeEmptyMatrix = function(n) {
  return _(_.range(n)).map(function() {
    return _(_.range(n)).map(function() {
      return 0;
    });
  });
};



window.findNRooksSolution = function(n) {
  var solution = makeEmptyMatrix(n);
  for (var i = 0; i < n; i++) {
    solution[i][i] = 1;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = function (n) {
    if (n === 1) {
      return n;
    }
    return n * solutionCount(n - 1);
  }; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount(n);
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var matrix = makeEmptyMatrix(n); //fixme
  var board = new Board(matrix);

  board[0][0] = 1;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {

    }
  }
  var firstRow = board.get(i);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = n; //fixme
  if (n === 1) {
    solutionCount = 1;
  } else if (n < 4) {
    solutionCount = 0;
  }


  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};





// n = 4 => 2