
// Source : https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Author : Wei XIE
// Date   : 2021-03-31

/********************************************************************************** 
Solution 1
Runtime: 80 ms, faster than 65.87% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
Memory Usage: 39.8 MB, less than 62.55% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
**********************************************************************************/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length -1;
    let start = -1;
    let end = -1;
    
    while (left <= right) {
        
        let mid = Math.floor(left + (right - left) / 2);
        
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1; 
        } else if(nums[mid] == target) {
            start = mid;
            end = mid;
            
            while (nums[start - 1] === target) start--;
            while (nums[end + 1] === target) end++;
            
            return [start, end]
        }
    }
    
    return [-1, -1];
};
