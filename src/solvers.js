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
var findNQueensSolutionSet = function(n) {
  var solutions = [];
  var matrix = makeEmptyMatrix(n);
  var board = new Board(matrix);
  var firstRowIndex = 0;
  var findNQueensSolutions = function(rowIndex) {
    if (rowIndex === n) {
      var rows = JSON.parse(JSON.stringify(board.rows()));
      solutions.push(rows);
      return;
    }
    for (var colIndex = 0; colIndex < n; colIndex++ ) {
      board.togglePiece(rowIndex, colIndex);
      if (!board.hasColConflictAt(colIndex) && !board.hasRowConflictAt(rowIndex) && !board.hasAnyMinorDiagonalConflicts() && !board.hasAnyMajorDiagonalConflicts()) {
        findNQueensSolutions(rowIndex + 1);
        board.togglePiece(rowIndex, colIndex);
      } else {
        board.togglePiece(rowIndex, colIndex);
      }
    }
  };
  findNQueensSolutions(firstRowIndex);
  return solutions;
};


window.findNQueensSolution = function(n) {
  var solution = undefined;
  if ( n === 0) {
    solution = [];
  } else if (n === 2 || n === 3) {
    solution = makeEmptyMatrix(n);
  } else {
    solution = findNQueensSolutionSet(n)[0];

  }



  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined;
  if ( n === 0) {
    solutionCount = 1;
  } else if (n === 2 || n === 3) {
    solutionCount = 0;
  } else {
    solutionCount = findNQueensSolutionSet(n).length;

  }



  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutionCount));
  return solutionCount;
};





// n = 4 => 2