/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
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
var middleNode = function (head) {
  let current = head;
  let listSize = 0;

  while (current.next !== null) {
    current = current.next;
    listSize += 1;
  }

  const mediumIndex = Math.round(listSize / 2);

  current = head;
  for (i = 0; i < mediumIndex; i++) {
    current = current.next;
  }

  return current;
};
