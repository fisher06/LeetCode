// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
// Author : Wei XIE
// Date   : 2021-05-05

/********************************************************************************** 
Solution 1
Runtime: 824 ms, faster than 11.56% of JavaScript online submissions for Best Time to Buy and Sell Stock III.
Memory Usage: 84.2 MB, less than 6.67% of JavaScript online submissions for Best Time to Buy and Sell Stock III.
**********************************************************************************/
/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let max_k = 2;
    
    let dp = Array.from(new Array(n), () => new Array(max_k+1));
    for(let i = 0;i < n;i++){
        for(let j = 0; j <= max_k; j++){
            dp[i][j] = new Array(2).fill(0);
        }
    }

    for (let i = 0; i < n; i++) {
                
        for (let k = max_k; k >= 1; k--) {
            
            if (i == 0) { 
                dp[0][k][1] = -prices[i];
                dp[0][k][0] = 0;
                continue;
            }
            
            dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
            dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);
        }
    }

    return dp[n - 1][max_k][0];
};

/********************************************************************************** 
Solution 2
Runtime: 96 ms, faster than 95.98% of JavaScript online submissions for Best Time to Buy and Sell Stock III.
Memory Usage: 49.6 MB, less than 79.46% of JavaScript online submissions for Best Time to Buy and Sell Stock III.
**********************************************************************************/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;

    let dp_i_1_0 = 0;
    let dp_i_1_1 = - prices[0];
    let dp_i_2_0 = 0;
    let dp_i_2_1 = - prices[0];
    
    for(let i = 0;i < n;i++){
        dp_i_1_0 = Math.max(dp_i_1_0, dp_i_1_1 + prices[i]);
        dp_i_1_1 = Math.max(dp_i_1_1, - prices[i]);
        dp_i_2_0 = Math.max(dp_i_2_0, dp_i_2_1 + prices[i]);
        dp_i_2_1 = Math.max(dp_i_2_1, dp_i_1_0 - prices[i]);
    }
    return dp_i_2_0;

};
