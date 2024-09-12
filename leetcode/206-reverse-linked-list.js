/**
 * https://leetcode.com/problems/reverse-linked-list/
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
var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  let current = head.next;
  let next = current?.next || null;
  head.next = null;

  while (current) {
    current.next = head;
    head = current;
    current = next;
    next = current?.next;
  }

  return head;
};
