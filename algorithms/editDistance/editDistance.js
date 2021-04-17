// Source : https://leetcode.com/problems/edit-distance/
// Author : Wei XIE
// Date   : 2021-04-17

/********************************************************************************** 
Solution 1
Runtime: 124 ms, faster than 33.65% of JavaScript online submissions for Edit Distance.
Memory Usage: 42.5 MB, less than 93.79% of JavaScript online submissions for Edit Distance.
**********************************************************************************/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let memo = [];
    
    for (let i = 0; i < m; i++) {
        memo[i] = [];
    }
    
    let dp = (i, j) => {
        if (i == -1) {
            return j + 1;
        }
        if (j == -1) {
            return i + 1;
        } 
        
        if (i in memo && j in memo[i]) {
            return memo[i][j];
        }

        if (word1[i] == word2[j]) {
            memo[i][j] = dp(i-1, j-1);
        } else {
            memo[i][j] = Math.min(
                dp(i-1, j-1) + 1,
                dp(i, j-1) + 1,
                dp(i-1, j) + 1
            )         
        }
        
        return memo[i][j]
    }
    
    return dp(m - 1, n - 1);
};

/********************************************************************************** 
Solution 2
Runtime: 148 ms, faster than 20.53% of JavaScript online submissions for Edit Distance.
Memory Usage: 45.9 MB, less than 25.30% of JavaScript online submissions for Edit Distance.
**********************************************************************************/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let dp = new Array();
    
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        dp[i][0] = i;
    }
    
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }
    
    for (let i = 1; i <= m; i++) {
        for (let  j = 1; j <= n; j++) {
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
               dp[i][j] = Math.min(
                   dp[i-1][j-1] + 1,
                   dp[i-1][j] + 1,
                   dp[i][j-1] + 1
               );
            }
        }
    }
    
    return dp[m][n];
};
