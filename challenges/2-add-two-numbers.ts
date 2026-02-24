/**
 * https://leetcode.com/problems/add-two-numbers/
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null | undefined, l2: ListNode | null | undefined): ListNode | null | undefined {
  let head;
  let current = new ListNode();
  let carry = 0;

  while (l1 || l2) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    const newNode = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    if (!head) {
      head = newNode;
      current = head;
    } else {
      current.next = newNode;
      current = current.next;
    }

    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (carry) {
    current.next = new ListNode(carry);
  }

  return head;
};

