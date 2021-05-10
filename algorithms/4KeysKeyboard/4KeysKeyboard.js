// Source : https://leetcode.com/problems/4-keys-keyboard/
// Author : Wei XIE
// Date   : 2021-05-10

/********************************************************************************** 
Solution 1

**********************************************************************************/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxA = function(n) {
    let dp = Array(n + 1).fill(0);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;
        for (let j = 2; j < i; j++) {
            dp[i] = Math.max(dp[i], dp[j - 2] * (i - j + 1));
        }
    }
    return dp[n];
}
