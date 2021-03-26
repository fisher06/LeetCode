// Source : https://leetcode.com/problems/n-queens/
// Author : Wei XIE
// Date   : 2021-03-26

/********************************************************************************** 
Solution 1
Runtime: 96 ms, faster than 51.73% of JavaScript online submissions for N-Queens.
Memory Usage: 40.6 MB, less than 88.64% of JavaScript online submissions for N-Queens.
**********************************************************************************/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        
        return '1'
    } else {
        
        let result = '1';

        for (let i = 2; i <= n; i++) {
            
            let num = '', current = result[0], count = 0, j = 0;
        
            while (j < result.length) {
                
                while (j < result.length && current === result[j]) { 
                    count++; j++; 
                }

                num += count + current;
                current = result[j]; 
                count = 0;
            }
        
            result = num        
        }
    
        return result;
   }
};
