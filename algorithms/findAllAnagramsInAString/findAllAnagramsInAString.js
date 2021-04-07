// Source : https://leetcode.com/problems/find-all-anagrams-in-a-string/
// Author : Wei XIE
// Date   : 2021-04-07

/********************************************************************************** 
Solution 1
Runtime: 160 ms, faster than 36.13% of JavaScript online submissions for Find All Anagrams in a String.
Memory Usage: 46.1 MB, less than 18.06% of JavaScript online submissions for Find All Anagrams in a String.
**********************************************************************************/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
    let left = 0;
    let right = 0;
    let window = {};
    let needs = {};
    let res = [];
    
    for (c of p) {
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
            if (right - left == p.length) {
                res.push(left)
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
    
    return res;
};
