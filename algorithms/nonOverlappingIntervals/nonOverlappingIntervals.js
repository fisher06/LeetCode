// Source : https://leetcode.com/problems/non-overlapping-intervals/
// Author : Wei XIE
// Date   : 2021-05-02

/********************************************************************************** 
Solution 1
Runtime: 72 ms, faster than 98.64% of JavaScript online submissions for Non-overlapping Intervals.
Memory Usage: 40.9 MB, less than 27.89% of JavaScript online submissions for Non-overlapping Intervals.
**********************************************************************************/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    
    intervals.sort(function compare(firstEl, secondEl) {
        if (firstEl[1] < secondEl[1]) {
            return -1;
        } else if (firstEl[1] > secondEl[1]) {
             return 1;
        } else {
            return 0;
        } 
    })
    
    let n = 0;
    let xEnd = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < xEnd) {
            n++;
        } else {
            xEnd = intervals[i][1];
        }
    }
        
    return n;
};
