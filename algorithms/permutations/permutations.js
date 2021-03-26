// Source : https://leetcode.com/problems/permutations/
// Author : Wei XIE
// Date   : 2021-03-26

/********************************************************************************** 
Solution 1
Runtime: 92 ms, faster than 86.24% of JavaScript online submissions for Permutations.
Memory Usage: 42 MB, less than 45.15% of JavaScript online submissions for Permutations.
**********************************************************************************/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {

    let res = [];
    let track = [];
    
    let backtrack = (nums, track) => {
        
        if (track.length === nums.length){
            res.push([...track]);
            return;
        }

        for (const num of nums) {

            if (track.includes(num)) continue;
            
            track.push(num);
            backtrack(nums, track);
            track.pop();
            
        }
        
    }
    
    backtrack(nums, track);
    return res;
    
};
