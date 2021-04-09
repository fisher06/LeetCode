// Source : https://leetcode.com/problems/permutation-in-string/
// Author : Wei XIE
// Date   : 2021-04-08

/********************************************************************************** 
Solution 1
Runtime: 160 ms, faster than 31.12% of JavaScript online submissions for Permutation in String.
Memory Usage: 45.5 MB, less than 26.32% of JavaScript online submissions for Permutation in String.
**********************************************************************************/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let window = {};
    let needs = {};
    let left = 0;
    let right = 0;
    let match = 0;
    
    for (c of s1) {
        if(!(c in needs)) {
            needs[c] = 0;
        }
        needs[c] += 1;
    }
    
    while (right < s2.length) {
        const c1 = s2[right];
        
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
            if (right - left == s1.length) {
                return true;
            }
            
            let c2 = s2[left];
            if (c2 in needs) {
                window[c2] -= 1;
                if (window[c2] < needs[c2]) {
                    match--;
                }
            }
            left++;
            
        }
    }
    
    return false;
};
