// Source : https://leetcode.com/problems/longest-common-prefix/
// Author : Wei XIE
// Date   : 2020-11-03

/********************************************************************************** 
Solution 1
Runtime: 96 ms, faster than 21.48% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 39.7 MB, less than 5.53% of JavaScript online submissions for Longest Common Prefix.
**********************************************************************************/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if (!strs.length) {
        return "";
    }
    
    let prefix = "";
    
    for (let i = 0; i < strs[0].length; i++) {
        
        for (let j = 0; j < strs.length-1; j++) {
            
            if (strs[j][i] !== strs[j+1][i]) {
                
                return prefix;
                
            }
        }
        
        prefix += strs[0][i];
    }
    
    return prefix;
};
