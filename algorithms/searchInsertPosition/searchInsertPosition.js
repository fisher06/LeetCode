// Source : https://leetcode.com/problems/search-insert-position/
// Author : Wei XIE
// Date   : 2020-12-07

/********************************************************************************** 
Solution 1
Runtime: 84 ms, faster than 20.14% of JavaScript online submissions for Search Insert Position.
Memory Usage: 38.8 MB, less than 43.14% of JavaScript online submissions for Search Insert Position.
**********************************************************************************/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    if (target <= nums[0]) { 
        return 0 
    }
    
    if (target > nums[nums.length -1]) { 
        return  nums.length
    }
    
    for (var i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i
        }
    }
};

/********************************************************************************** 
Solution 2
Runtime: 72 ms, faster than 93.41% of JavaScript online submissions for Search Insert Position.
Memory Usage: 38.7 MB, less than 43.14% of JavaScript online submissions for Search Insert Position.
**********************************************************************************/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    while(nums[i] < target) i += 1;
    return i;    
};
