/**
 * https://leetcode.com/problems/add-two-numbers/
 */
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
var addTwoNumbers = function (l1, l2) {
  let head;
  let foot;
  let carry = 0;

  while (l1 || l2) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    const node = new ListNode(sum % 10);

    if (!foot) {
      foot = node;
      head = foot;
    } else {
      foot.next = node;
      foot = foot.next;
    }

    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (carry) {
    foot.next = new ListNode(carry);
  }

  return head;
};
