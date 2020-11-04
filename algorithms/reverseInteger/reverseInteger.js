// Source : https://leetcode.com/problems/reverse-integer/
// Author : Wei XIE
// Date   : 2020-11-03

/********************************************************************************** 
Solution 1
Runtime: 100 ms, faster than 50.95% of JavaScript online submissions for Reverse Integer.
Memory Usage: 40.1 MB, less than 18.65% of JavaScript online submissions for Reverse Integer.
**********************************************************************************/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let r = parseInt(x.toString().split('').reverse().join(''))
    
    if (r < -2147483648 || r > 2147483647) {
        return 0
    }
    
    if (x < 0) {
        r = -r
    }
    
    return r
};

/********************************************************************************** 
Solution 2
Runtime: 88 ms, faster than 93.00% of JavaScript online submissions for Reverse Integer.
Memory Usage: 40.1 MB, less than 18.65% of JavaScript online submissions for Reverse Integer.
**********************************************************************************/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    var flag = false;
    
    if (x < 0) {
        x *= -1;
        flag = true;
    }
    
    let num = 0;
    let cur = 0;
    
    while (x > 0) {
        cur = x % 10;
        x = Math.floor(x / 10);
        num += cur;
        num *= 10;
    }
    
    num /= 10;
    
    if (num < -2147483648 || num > 2147483647) {
        return 0
    }
    
    if (flag === true) {
        num = -num
    }
    
    return num
};
