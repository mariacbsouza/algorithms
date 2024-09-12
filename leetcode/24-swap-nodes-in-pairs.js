/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head?.next) return head;

  let left = head;
  let right = head.next;
  let previous = head;
  head = head.next;

  while (left && right) {
    previous.next = right;
    [left.next, right.next] = [right.next, left];

    previous = left;
    left = previous?.next;
    right = previous?.next?.next;
  }

  return head;
};
