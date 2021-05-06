
// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// Author : Wei XIE
// Date   : 2021-05-06

/********************************************************************************** 
Solution 1
Runtime: 88 ms, faster than 28.78% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
Memory Usage: 48.5 MB, less than 5.07% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
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
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    }

    return dp[n - 1][0];
};

/********************************************************************************** 
Solution 2
Runtime: 92 ms, faster than 18.06% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
Memory Usage: 39.1 MB, less than 74.99% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
**********************************************************************************/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let dp_i_1 = -prices[0];
    let dp_i_0 = 0;
    
    for (let i = 0; i < n; i++) {
        
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
    }

    return dp_i_0;
};
