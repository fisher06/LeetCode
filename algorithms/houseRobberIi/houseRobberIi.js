// Source : https://leetcode.com/problems/house-robber-ii/
// Author : Wei XIE
// Date   : 2021-05-07

/********************************************************************************** 
Solution 1
Runtime: 68 ms, faster than 98.71% of JavaScript online submissions for House Robber II.
Memory Usage: 38.3 MB, less than 91.49% of JavaScript online submissions for House Robber II.
**********************************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if (nums.length == 1) {
        return nums[0];
    }
    
    let dp = (subNums) => {
        let n = subNums.length; 
        if (n == 1) {
            return subNums[0];
        } 
        
        let memo = Array(n + 2).fill(0);

        for (let i = n - 1; i >= 0; i--) {

            memo[i] = Math.max(
                memo[i + 1],
                memo[i + 2] + subNums[i]
            );
        }
        return memo[0];
    }
    
    let nums1 = [...nums];
    nums1.shift();
    let nums2 = [...nums];
    nums2.pop();
    
    let res = Math.max(
        dp(nums1),
        dp(nums2)
    );
    
    return res;
};

/********************************************************************************** 
Solution 2
Runtime: 72 ms, faster than 94.32% of JavaScript online submissions for House Robber II.
Memory Usage: 38 MB, less than 97.42% of JavaScript online submissions for House Robber II.
**********************************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    if (n == 0) {
        return 0;    
    } else if (n == 1) {
        return nums[0];           
    } 
    
    let dp = (start, end) => {

        let dp_i_1 = 0;
        let dp_i_2 = 0;
        let dp_i = 0;

        for (let i = end; i >= start; i--) {
            dp_i = Math.max(dp_i_1, nums[i] + dp_i_2);
            dp_i_2 = dp_i_1;
            dp_i_1 = dp_i;
        }

        return dp_i;
    }
    
    let res = Math.max(
        dp(0, n - 2),
        dp(1, n - 1)
    );
    
    return res;
};
