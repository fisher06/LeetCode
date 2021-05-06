// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// Author : Wei XIE
// Date   : 2021-05-06

/********************************************************************************** 
Solution 1
Runtime: 92 ms, faster than 43.10% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
Memory Usage: 40.8 MB, less than 20.11% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
**********************************************************************************/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
        
    let dp = Array.from(new Array(n), () => new Array(2).fill(0));

    for (let i = 0; i < n; i++) {
                
        if (i == 0) {
            dp[0][1] = -prices[i];
            dp[0][0] = 0;
            continue;
        } else if (i == 1) {
            dp[1][1] = Math.max(dp[i-1][1], - prices[i]);
            dp[1][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
            continue;
        }
        
        
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0]- prices[i]);
    }

    return dp[n - 1][0];
};

/********************************************************************************** 
Solution 1
Runtime: 84 ms, faster than 74.71% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
Memory Usage: 38.6 MB, less than 92.35% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
**********************************************************************************/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let dp_i_1 = - prices[0];
    let dp_i_0 = 0;
    let dp_pre_0 = 0;

    for (let i = 1; i < n; i++){
        let temp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i]);
        dp_pre_0 = temp;
    }
    return dp_i_0;

};
