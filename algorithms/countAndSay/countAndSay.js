// Source : https://leetcode.com/problems/count-and-say/
// Author : Wei XIE
// Date   : 2020-12-08

/********************************************************************************** 
Solution 1
Runtime: 80 ms, faster than 80.05% of JavaScript online submissions for Count and Say.
Memory Usage: 41 MB, less than 42.53% of JavaScript online submissions for Count and Say.
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
