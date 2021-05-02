// Source : https://leetcode.com/problems/non-overlapping-intervals/
// Author : Wei XIE
// Date   : 2021-05-02

/********************************************************************************** 
Solution 1
Runtime: 104 ms, faster than 96.57% of JavaScript online submissions for Minimum Number of Arrows to Burst Balloons.
Memory Usage: 45.7 MB, less than 75.43% of JavaScript online submissions for Minimum Number of Arrows to Burst Balloons.
**********************************************************************************/
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort(function compare(firstEl, secondEl) {
        if (firstEl[1] < secondEl[1]) {
            return -1;
        } else if (firstEl[1] > secondEl[1]) {
             return 1;
        } else {
            return 0;
        } 
    })
    
    let n = 0;
    let xEnd = points[0][1];
    
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] <= xEnd) {
            n++;
        } else {
            xEnd = points[i][1];
        }
    }
        
    return points.length - n;
};
