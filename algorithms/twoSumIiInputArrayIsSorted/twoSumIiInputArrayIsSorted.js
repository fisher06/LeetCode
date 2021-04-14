
// Source : https://leetcode.com/problems/linked-list-cycle/
// Author : Wei XIE
// Date   : 2021-04-14

/********************************************************************************** 
Solution 1
Runtime: 76 ms, faster than 88.33% of JavaScript online submissions for Two Sum II - Input array is sorted.
Memory Usage: 38.9 MB, less than 81.16% of JavaScript online submissions for Two Sum II - Input array is sorted.
**********************************************************************************/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left <= right) {
        let sum = numbers[left] + numbers[right];
        if (sum == target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }
    }
    
    return false;
};
