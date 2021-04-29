// Source : https://leetcode.com/problems/longest-palindromic-subsequence/
// Author : Wei XIE
// Date   : 2021-04-28

/********************************************************************************** 
Solution 1
Runtime: 276 ms, faster than 75.88% of JavaScript online submissions for Longest Palindromic Subsequence.
Memory Usage: 66.6 MB, less than 82.41% of JavaScript online submissions for Longest Palindromic Subsequence.
**********************************************************************************/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    
    let dp = Array.from(new Array(s.length), () => new Array(s.length).fill(0))

    let n = s.length
    
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (i == j) {
                dp[j][j] = 1
                continue
            }
            
            if (s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[0][n - 1]

};
