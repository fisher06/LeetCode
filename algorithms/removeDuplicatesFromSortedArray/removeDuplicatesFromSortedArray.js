
// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Author : Wei XIE
// Date   : 2020-11-19

/********************************************************************************** 
Solution 1
Runtime: 92 ms, faster than 77.68% of JavaScript online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 41 MB, less than 49.27% of JavaScript online submissions for Remove Duplicates from Sorted Array.
**********************************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    for (var i = nums.length - 2; i >= 0; i--) {
        
        if (nums[i] === nums[i + 1]) {
            
            nums.splice(i, 1);
        }
    }
    
    return nums.length;
};
