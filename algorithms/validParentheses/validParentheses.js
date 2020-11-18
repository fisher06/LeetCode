
// Source : https://leetcode.com/problems/valid-parentheses/
// Author : Wei XIE
// Date   : 2020-11-18

/********************************************************************************** 
Solution 1
Runtime: 80 ms, faster than 92.53% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 33.9 MB, less than 99.98% of JavaScript online submissions for Valid Parentheses.
**********************************************************************************/
/**
/** 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let test = [];
    
    for (let i = 0; i < s.length; i++) {
        
        let char = s[i];
        
        if (char === '(') {
            test.push(')');
        } else if (char === '[') {
            test.push(']');
        }  else if (char === '{') {
            test.push('}');
        } else {
            if (test.pop() !== char) {
                return false;
            }
        }     
    }
    
    return test.length ? false : true;
    
};
