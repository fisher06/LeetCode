// Source : https://leetcode.com/problems/minimum-window-substring/
// Author : Wei XIE
// Date   : 2021-04-01

/********************************************************************************** 
Solution 1
Runtime: 212 ms, faster than 14.89% of JavaScript online submissions for Minimum Window Substring.
Memory Usage: 46 MB, less than 16.80% of JavaScript online submissions for Minimum Window Substring.
**********************************************************************************/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let start = 0;
    let minLen = s.length +1;
    let left = 0;
    let right = 0;
    
    let window = {};
    let needs ={};
    
    for (let c of t) {
        if (!(c in needs)){
            needs[c] = 0;
        }

        needs[c] += 1;
    } 
    
    let match = 0;
    
    while (right < s.length) {
        let c1 = s[right];
        
        if (c1 in needs) {
            
            if (!(c1 in window)){
                window[c1] = 0;
            }

            window[c1] += 1;
            
            if (window[c1] == needs[c1]) {
                match++;
            }
        }
        right++;
        
        while (match == Object.keys(needs).length) {
            
            if (right - left <= minLen) {
                start = left;
                minLen = right - left;
            }
            
            let c2 = s[left];
            
            if (c2 in needs) {
                window[c2] -= 1;
                if (window[c2] < needs[c2]) {
                    match--;
                }
            }
            left++;
        }
    }
    return minLen > s.length ? '' : s.substr(start, minLen);
};
