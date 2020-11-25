// Source : https://leetcode.com/problems/remove-element/
// Author : Wei XIE
// Date   : 2020-11-20

/********************************************************************************** 
Solution 1
Runtime: 76 ms, faster than 85.08% of JavaScript online submissions for Remove Element.
Memory Usage: 38.8 MB, less than 37.13% of JavaScript online submissions for Remove Element.
**********************************************************************************/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length
};
