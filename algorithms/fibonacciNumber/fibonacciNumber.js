// Source : https://leetcode.com/problems/fibonacci-number/
// Author : Wei XIE
// Date   : 2021-03-29

/********************************************************************************** 
Solution 1
Runtime: 80 ms, faster than 60.81% of JavaScript online submissions for Fibonacci Number.
Memory Usage: 38.1 MB, less than 92.11% of JavaScript online submissions for Fibonacci Number.
**********************************************************************************/
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    if (n <= 1) return n;
    
    let curr = 1;
    let prev = 0;
    
    for (let i = 2; i <= n; i++){
        let sum = curr + prev;
        prev = curr;
        curr = sum;
    }
    
    return curr;
};

/********************************************************************************** 
Solution 2
Runtime: 56 ms, faster than 99.96% of JavaScript online submissions for Fibonacci Number.
Memory Usage: 38.6 MB, less than 19.46% of JavaScript online submissions for Fibonacci Number.
**********************************************************************************/
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    if (n <= 1) return n;
    
    let memo = {};
    
    memo[2] = memo[1] = 1;
    
    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    
    return memo[n];
};
