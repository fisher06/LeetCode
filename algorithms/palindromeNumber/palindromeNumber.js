// Source : https://leetcode.com/problems/palindrome-number/
// Author : Wei XIE
// Date   : 2020-11-03

/********************************************************************************** 
Solution 1
Runtime: 100 ms, faster than 50.95% of JavaScript online submissions for Reverse Integer.
Memory Usage: 40.1 MB, less than 18.65% of JavaScript online submissions for Reverse Integer.
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
