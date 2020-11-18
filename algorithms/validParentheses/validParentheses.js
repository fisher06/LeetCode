
// Source : https://leetcode.com/problems/valid-parentheses/
// Author : Wei XIE
// Date   : 2020-11-18

/********************************************************************************** 
Solution 1
Runtime: 96 ms, faster than 21.48% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 39.7 MB, less than 5.53% of JavaScript online submissions for Longest Common Prefix.
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
