// Source : https://leetcode.com/problems/two-sum/
// Author : Wei XIE
// Date   : 2025-06-09


function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>();

  for(let i = 0; i < nums.length; i++ ) {
    let complement = target - nums[i];

    if (map.has(complement)) {
        return [i, map.get(complement)]
    }
    map.set(nums[i], i);
  } 

};
