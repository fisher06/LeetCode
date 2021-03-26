// Source : https://leetcode.com/problems/n-queens/
// Author : Wei XIE
// Date   : 2021-03-26

/********************************************************************************** 
Solution 1
Runtime: 96 ms, faster than 51.73% of JavaScript online submissions for N-Queens.
Memory Usage: 40.6 MB, less than 88.64% of JavaScript online submissions for N-Queens.
**********************************************************************************/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    let board = [];
    let res = [];
        
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.');
    }

    let isValid = (row, col) => {

        for (i = 0; i < n; i++) {
        if (board[i][col] == 'Q')
            return false;
        }

        for (i = row - 1, j = col + 1; 
                i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 'Q')
                return false;
        }

        for (i = row - 1, j = col - 1;
                i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q')
                return false;
        }
        return true;
    }
    
    let backtrack = (row, col) => {
        if (row === n - 1)   {
            let clone = [...board], tmp = [];
            for (let i = 0; i < n; i++) {
                tmp.push(clone[i].join(""));
            }
            return res.push(tmp);
        }

        for (let i = 0; i < n; i++) {
            if ( isValid(row + 1, i) === false) continue;
            board[row + 1][i] = 'Q';
            backtrack(row + 1, i);
            board[row+1][i] = '.';
        }
    }

    for (let i = 0; i < n; i++) {
        board[0][i] = 'Q';
        backtrack(0, i);
        board[0][i] = '.';
    }
    return res;
};
