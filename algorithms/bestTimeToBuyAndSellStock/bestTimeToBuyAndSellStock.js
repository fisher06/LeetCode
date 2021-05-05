// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Author : Wei XIE
// Date   : 2021-05-05

/********************************************************************************** 
Solution 1
Runtime: 392 ms, faster than 5.13% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 77.1 MB, less than 5.13% of JavaScript online submissions for Best Time to Buy and Sell Stock.
**********************************************************************************/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let n = prices.length;
    let dp = [];
    
    for (let i = 0; i < n; i++) {
        
        dp[i] = [];
        
        if (i == 0) {
            dp[0][1] = -prices[i];
            dp[0][0] = 0;
            continue;
        }
        
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], - prices[i]);
    }

    return dp[n - 1][0];
};

/********************************************************************************** 
Solution 2
Runtime: 100 ms, faster than 70.94% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 49 MB, less than 44.10% of JavaScript online submissions for Best Time to Buy and Sell Stock.
**********************************************************************************/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let n = prices.length;
    
    let dp_i_0 = 0; 
    let dp_i_1 = -prices[0];
    
    for (let i = 0; i < n; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, -prices[i]);
    }
    return dp_i_0;

};
