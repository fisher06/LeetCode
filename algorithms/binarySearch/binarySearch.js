// Source : https://leetcode.com/problems/binary-search/
// Author : Wei XIE
// Date   : 2021-03-31

/********************************************************************************** 
Solution 1
Runtime: 84 ms, faster than 58.54% of JavaScript online submissions for Binary Search.
Memory Usage: 42.2 MB, less than 84.88% of JavaScript online submissions for Binary Search.
**********************************************************************************/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            return mid;
        }
    }
    
    return -1;

};
