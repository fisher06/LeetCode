// Source : https://leetcode.com/problems/coin-change/
// Author : Wei XIE
// Date   : 2021-03-29

/********************************************************************************** 
Solution 1
Runtime: 128 ms, faster than 57.67% of JavaScript online submissions for Coin Change.
Memory Usage: 44.7 MB, less than 32.46% of JavaScript online submissions for Coin Change.
**********************************************************************************/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    const dp = Array(amount + 1).fill(Infinity);
    
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        
        for (const coin of coins) {
            
          if (i - coin >= 0) {
              
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
              
          }
        }
      }
      return dp[amount] === Infinity ? -1 : dp[amount];
};

/********************************************************************************** 
Solution 2
Runtime: 196 ms, faster than 22.74% of JavaScript online submissions for Coin Change.
Memory Usage: 45.5 MB, less than 13.82% of JavaScript online submissions for Coin Change.
**********************************************************************************/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo = {};
    memo[0] = 0;
    
    let dp = (n) => {
        if(n in memo) return memo[n];
        if(n == 0) return 0;
        if(n < 0) return -1;
        
        let res = Infinity;
        
        for(const coin of coins) {
            let subproblem = dp(n - coin);
            if(subproblem == -1) continue;
            res = Math.min(res, 1 + subproblem)
        }
        memo[n] = res != Infinity ? res : -1;
        return memo[n];
    }
    
    return dp(amount);

};
