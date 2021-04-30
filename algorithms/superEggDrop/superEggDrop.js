// Source : https://leetcode.com/problems/edit-distance/
// Author : Wei XIE
// Date   : 2021-04-18

/********************************************************************************** 
Solution 1
Runtime: 240 ms, faster than 33.33% of JavaScript online submissions for Super Egg Drop.
Memory Usage: 44.7 MB, less than 85.71% of JavaScript online submissions for Super Egg Drop.
**********************************************************************************/
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
  
    let memo = {};
        
    let dp = (k, n) => {
        if (k == 1) {
            return n;
        }
        
        if (n == 0) {
            return 0;
        }
        
        if (k in memo && n in memo[k]) {
            return memo[k][n];
        }
        
        let res = n;
        
        let left = 1;
        let right = n;
        
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            
            let broken = dp(k - 1, mid - 1);
            let notBroken = dp(k, n - mid);
            
            if (broken > notBroken) {
                right = mid - 1;
                res = Math.min(res, broken + 1);
            } else {
                left = mid + 1;
                res = Math.min(res, notBroken + 1);
            }
                        
        }

        if (!(k in memo)) {
            memo[k] = {};
        }
    
        memo[k][n] = res;
        return res;
    }
    
    return dp(k, n);
};


/********************************************************************************** 
Solution 2
Runtime: 84 ms, faster than 89.47% of JavaScript online submissions for Super Egg Drop.
Memory Usage: 44.6 MB, less than 84.21% of JavaScript online submissions for Super Egg Drop.
**********************************************************************************/
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
      
    let dp = [];
    
    for (let i = 0; i <= k; i++) {
        dp[i] = [];
        dp[i][0] = 0;
    }
    
    for (let i = 0; i <= n; i++) {
        dp[0][i] = 0;
    }
    
    let m = 0;
    while (dp[k][m] < n) {
        m++;
        for (let i = 1; i <= k; i++) {
            dp[i][m] = dp[i][m - 1] + dp[i - 1][m - 1] + 1;
        }
            
    }
    return m;
    
};
