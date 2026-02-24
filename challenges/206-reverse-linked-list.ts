/**
 * https://leetcode.com/problems/reverse-linked-list/
 */
function reverseList(head: ListNode | null): ListNode | null {
  let previous = null;

  while (head?.next) {
    const next = head.next;
    head.next = previous;
    previous = head;
    head = next;
  }

  if (head) {
    head.next = previous;
  }

  return head;
};
