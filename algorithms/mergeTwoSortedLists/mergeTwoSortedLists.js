// Source : https://leetcode.com/problems/merge-two-sorted-lists/
// Author : Wei XIE
// Date   : 2020-11-18

/********************************************************************************** 
Solution 1
Runtime: 88 ms, faster than 80.04% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 40 MB, less than 82.79% of JavaScript online submissions for Merge Two Sorted Lists.
**********************************************************************************/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(0);
    let n = dummy;
    
    let n1 = l1, n2 = l2;
    
    while (n1 || n2) {
        if (!n2 || (n1 && n1.val < n2.val)) {
            n.next = new ListNode(n1.val);
            n1 = n1.next;
        } else {
            n.next = new ListNode(n2.val);
            n2 = n2.next;
        }
        
        n = n.next;
    }
    
    return dummy.next;
};
