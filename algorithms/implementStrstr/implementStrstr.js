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

/********************************************************************************** 
Solution 2
Runtime: 80 ms, faster than 68.47% of JavaScript online submissions for Implement strStr().
Memory Usage: 39 MB, less than 52.58% of JavaScript online submissions for Implement strStr().
**********************************************************************************/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if(!needle) {
        return 0;
    }
    
    if(!haystack) {
        return -1;
    }
    
    if(haystack.length<needle.length) {
        return -1;
    } 
    
    let i=0;
    let j=0;
    
    while(i<haystack.length && j<needle.length){
        
        if (haystack[i]===needle[j]){
            i++;
            j++;
        } else {
            i = (++i) - j;
            j = 0;
        }
    }
    if(j===needle.length) return i-j;

    return -1;
};
