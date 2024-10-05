/**
 * https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
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
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  const arrayList = [];

  while (head) {
    arrayList.push(head.val);
    head = head?.next;
  }

  const listSize = arrayList.length;
  [arrayList[k - 1], arrayList[listSize - k]] = [
    arrayList[listSize - k],
    arrayList[k - 1],
  ];

  head = new ListNode(arrayList[0]);
  current = head;

  for (let i = 1; i < listSize; i++) {
    current.next = new ListNode(arrayList[i]);
    current = current.next;
  }

  return head;
};
