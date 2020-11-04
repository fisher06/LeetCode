// Source : https://leetcode.com/problems/palindrome-number/
// Author : Wei XIE
// Date   : 2020-11-03

/********************************************************************************** 
Solution 1
Runtime: 216 ms, faster than 69.52% of JavaScript online submissions for Palindrome Number.
Memory Usage: 48.1 MB, less than 5.85% of JavaScript online submissions for Palindrome Number.
**********************************************************************************/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if (x < 0 || x > 2147483647) {
        return false; 
    }
    
    if (x <10) {
        return true;
    }
    
    let num = x;
    let cur = 0;
    
    while (num > 0) {
        cur = cur * 10 + num % 10
        num = parseInt(num / 10)
    }
    
    if (cur === x) {
        return true;
    }
    return false;
};
