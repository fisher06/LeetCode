// Source : https://leetcode.com/problems/house-robber-ii/
// Author : Wei XIE
// Date   : 2021-05-08

/********************************************************************************** 
Solution 1
Runtime: 104 ms, faster than 24.62% of JavaScript online submissions for House Robber III.
Memory Usage: 43.4 MB, less than 32.82% of JavaScript online submissions for House Robber III.
**********************************************************************************/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    let memo = new Map();
    
    let dp = (node) => {
        if (node === null) {
            return 0;
        }
        
        if(memo.has(node)) {
            return memo.get(node);
        }
        
        let res = Math.max(
            node.val + (
                (node.left === null) ? 0 : dp(node.left.left) + dp(node.left.right)
            ) + (
                (node.right === null) ? 0 : dp(node.right.left) + dp(node.right.right)
            ),
            (
                (node.left === null) ? 0 : dp(node.left)
            ) + (
                (node.right === null) ? 0 : dp(node.right)
            )
        );   
        
        memo.set(node, res);
        
        return res;
    }
    
    return dp(root);
};


/********************************************************************************** 
Solution 2
Runtime: 120 ms, faster than 18.46% of JavaScript online submissions for House Robber III.
Memory Usage: 43.3 MB, less than 41.54% of JavaScript online submissions for House Robber III.
**********************************************************************************/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    
    let dp = (node) => {
        if (node === null) {
            return [0, 0];
        }
        
        let left = dp(node.left);
        let right = dp(node.right);
        
        let rob = node.val + left[0] + right[0];
        let no_rob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        
        return [no_rob, rob];
    }
    let res = dp(root);
    return Math.max(res[0], res[1]);
};
