
// Source : https://leetcode.com/problems/roman-to-integer/
// Author : Wei XIE
// Date   : 2020-11-12

/********************************************************************************** 
Solution 1
Runtime: 168 ms, faster than 61.09% of JavaScript online submissions for Roman to Integer.
Memory Usage: 43.7 MB, less than 6.21% of JavaScript online submissions for Roman to Integer.
**********************************************************************************/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let obj = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    
    var sum = 0; 
    
    for(var i = 0; i < s.length; i++) {
        curr = obj[s[i]];
        next = obj[s[i+1]];
        if(s[i+1] !== "" && curr < next) {
            sum += next - curr;
            i++;
        } else 
            sum += curr;
    }
    return sum;

};
