// Source : https://leetcode.com/problems/stone-game/
// Author : Wei XIE
// Date   : 2021-04-30

/********************************************************************************** 
Solution 1
Runtime: 428 ms, faster than 5.92% of JavaScript online submissions for Stone Game.
Memory Usage: 75.3 MB, less than 5.26% of JavaScript online submissions for Stone Game.
**********************************************************************************/
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    
    let n = piles.length;
    
    let dp = []
 
    for (let i = 0; i <= n; i++) {
        dp[i]=[]
        for (let j = 0;j <= n; j++) {
            dp[i][j] = [0, 0]
        }
    }
    
    for(let i = 0;i < n; i++){
        dp[i][i] = [piles[i], 0];
    }
    
    for (let l = 1; l <= n; l++) {
        for (let i = 0; i < n; i++) {
            let j = l + i;
            if (j < n) {
                let left = piles[i] + dp[i + 1][j][1];
                let right = piles[j] + dp[i][j - 1][1];
            
                if (left < right) {
                    dp[i][j][0] = right;
                    dp[i][j][1] = dp[i][j - 1][0];
                } else {
                    dp[i][j][0] = left;
                    dp[i][j][1] = dp[i + 1][j][0];
                }
            }
        }
    }
        
    let res = dp[0][n-1];
    return dp[0][n-1][0] - dp[0][n-1][1] > 0 ? true : false;
};
