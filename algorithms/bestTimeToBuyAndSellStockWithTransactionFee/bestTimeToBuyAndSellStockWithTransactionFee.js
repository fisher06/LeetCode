// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
// Author : Wei XIE
// Date   : 2021-05-06

/********************************************************************************** 
Solution 1
Runtime: 236 ms, faster than 7.90% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee.
Memory Usage: 65.4 MB, less than 5.55% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction 
**********************************************************************************/
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let n = prices.length;
    let dp = Array.from(new Array(n), () => new Array(2).fill(0));
    
    for (let i = 0; i < n; i++) {
                
        if (i == 0) {
            dp[0][1] = -prices[i] - fee;
            dp[0][0] = 0;
            continue;
        }
        
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i] - fee);
    }

    return dp[n - 1][0];
};

/********************************************************************************** 
Solution 2
Runtime: 92 ms, faster than 80.00% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee.
Memory Usage: 47.3 MB, less than 68.57% of JavaScript online submissions for Best Time to Buy and Sell Stock with Transaction Fee.
**********************************************************************************/
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let n = prices.length;
    let dp_i_1 = -prices[0] - fee;
    let dp_i_0 = 0;
    
    for (let i = 0; i < n; i++) {
        let temp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, temp - prices[i] - fee);
    }

    return dp_i_0;
};
