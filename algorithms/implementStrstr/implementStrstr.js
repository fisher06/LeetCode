// Source : https://leetcode.com/problems/implement-strstr/
// Author : Wei XIE
// Date   : 2020-12-05

/********************************************************************************** 
Solution 1
Runtime: 76 ms, faster than 86.97% of JavaScript online submissions for Implement strStr().
Memory Usage: 38.6 MB, less than 73.94% of JavaScript online submissions for Implement strStr().
**********************************************************************************/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle) {
        return haystack.indexOf(needle)
    } else {
        return 0
    }
};
