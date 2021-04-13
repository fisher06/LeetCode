// Source : https://leetcode.com/problems/linked-list-cycle/
// Author : Wei XIE
// Date   : 2021-04-13

/********************************************************************************** 
Solution 1
Runtime: 88 ms, faster than 63.34% of JavaScript online submissions for Linked List Cycle.
Memory Usage: 41 MB, less than 86.84% of JavaScript online submissions for Linked List Cycle.
**********************************************************************************/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    let fast = head;
    let slow = head;
    
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            return true;
        }
    }
    return false;
    
};
