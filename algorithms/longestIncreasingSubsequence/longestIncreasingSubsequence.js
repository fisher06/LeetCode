// Source : https://leetcode.com/problems/longest-increasing-subsequence/
// Author : Wei XIE
// Date   : 2021-04-16

/********************************************************************************** 
Solution 1
Runtime: 168 ms, faster than 52.33% of JavaScript online submissions for Longest Increasing Subsequence.
Memory Usage: 39.2 MB, less than 93.72% of JavaScript online submissions for Longest Increasing Subsequence.
**********************************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let res = 0;
    let dp = Array(nums.length).fill(1);
    
    for (let i =0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    res = Math.max(...dp);
    
    return res;
};
