// Source : https://leetcode.com/problems/house-robber/
// Author : Wei XIE
// Date   : 2021-05-07

/********************************************************************************** 
Solution 1
Runtime: 84 ms, faster than 16.84% of JavaScript online submissions for House Robber.
Memory Usage: 38.4 MB, less than 60.62% of JavaScript online submissions for House Robber.
**********************************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    if (n <= 0) {
        return 0;
    }
    
    let memo = Array(n).fill(-1);

    let dp = (nums, start) => {
        if (start >= n) {
            return 0;
        }
        
        if (memo[start] !== -1) {
            return memo[start];    
        }
        
        let res = Math.max(
            dp(nums, start + 1),
            nums[start] + dp(nums, start + 2)
        );

        memo[start] = res;
        
        return res;
    }
    
    return dp(nums, 0)
};

/********************************************************************************** 
Solution 2
Runtime: 84 ms, faster than 16.84% of JavaScript online submissions for House Robber.
Memory Usage: 38.4 MB, less than 60.62% of JavaScript online submissions for House Robber.
**********************************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    if (n <= 0) {
        return 0;
    }
    
    let dp = Array(n + 2).fill(0);

    for (let i = n -1; i >= 0; i--) {
        
        dp[i] = Math.max(
            dp[i + 1],
            dp[i + 2] + nums[i]
        );
    }
    return dp[0];
};
