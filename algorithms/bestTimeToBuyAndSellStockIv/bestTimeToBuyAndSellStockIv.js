// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
// Author : Wei XIE
// Date   : 2021-05-06

/********************************************************************************** 
Solution 1
Runtime: 124 ms, faster than 18.56% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.
Memory Usage: 51.7 MB, less than 7.22% of JavaScript online submissions for Best Time to Buy and Sell Stock IV.
**********************************************************************************/
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (k == 0) return 0;
    
    let  n = prices.length;
    
    if (n == 0) return 0; 

    let dp = Array.from( new Array(n), () => new Array(k+1) );
    
    for (let i = 0; i < n; i++) {
        for(let j = 0; j <= k; j++){
            dp[i][j] = new Array(2).fill(0);
        }
    }
    
    for (let i = 0; i < n; i++) {
                
        for (let j = k; j >= 1; j--) {
            
            if (i == 0) { 
                dp[0][j][1] = -prices[i];
                dp[0][j][0] = 0;
                continue;
            }
            
            dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1] + prices[i]);
            dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0] - prices[i]);
        }
    }

    return dp[n - 1][k][0];
};
