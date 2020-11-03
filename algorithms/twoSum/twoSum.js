// Source : https://leetcode.com/problems/two-sum/
// Author : Wei XIE
// Date   : 2020-11-03

/********************************************************************************** 
Solution 1
Runtime: 112 ms, faster than 49.34% of JavaScript online submissions for Two Sum.
Memory Usage: 38 MB, less than 5.69% of JavaScript online submissions for Two Sum.
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if (nums[j] == (target - nums[i])){
                return [i, j];
            }
        }
    }

    return {}; 
};


/********************************************************************************** 
Solution 2
Runtime: 72 ms, faster than 96.32% of JavaScript online submissions for Two Sum.
Memory Usage: 41.1 MB, less than 5.69% of JavaScript online submissions for Two Sum.
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var dict = {}
    for(var i = 0; i < nums.length; i++) {
        var cur = nums[i];
        var val = target-cur;
        if(val in dict) {
            return [dict[val], i];
        }
        
        dict[cur] = i;
    }

    return null;
    
};
