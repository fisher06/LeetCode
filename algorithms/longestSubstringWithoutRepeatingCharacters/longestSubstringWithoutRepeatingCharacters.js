
// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Author : Wei XIE
// Date   : 2021-04-07

/********************************************************************************** 
Solution 1
Runtime: 124 ms, faster than 52.75% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 44.1 MB, less than 60.66% of JavaScript online submissions for Longest Substring Without Repeating Characters.
**********************************************************************************/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let left = 0;
    let right = 0;
    let window = {};
    let res = 0;
    
    while (right < s.length) {
        let c1 = s[right];
        
        if (!(c1 in window)){
            window[c1] = 0;
        }

        window[c1] += 1;
        right++;
        
        while (window[c1] > 1) {
            let c2 = s[left];
            if (c2 in window){
                window[c2]--;
                left++;
            }
        }
        res = Math.max(res, right - left);
    }
    return res;
};
