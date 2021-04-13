// Source : https://leetcode.com/problems/linked-list-cycle-ii/
// Author : Wei XIE
// Date   : 2021-04-13

/********************************************************************************** 
Solution 1
Runtime: 88 ms, faster than 80.03% of JavaScript online submissions for Linked List Cycle II.
Memory Usage: 41.1 MB, less than 89.33% of JavaScript online submissions for Linked List Cycle II.
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    let fast = head;
    let slow = head;
    
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            break;
        }
    }
    
    if (fast == null || fast.next == null) {
        return null;
    }
    
    slow = head;
    while (slow != fast) {
        fast = fast.next;
        slow = slow.next;
    }
    
    return slow;
    
};
