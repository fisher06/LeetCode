// Source : https://leetcode.com/problems/two-sum/
// Author : Wei XIE
// Date   : 2020-11-03

/********************************************************************************** 
Solution 1
Runtime: 112 ms, faster than 49.34% of JavaScript online submissions for Two Sum.
Memory Usage: 38 MB, less than 5.69% of JavaScript online submissions for Two Sum.
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if (nums[j] == (target - nums[i])){
                return [i, j];
            }
        }
    }

    return {}; 
};
