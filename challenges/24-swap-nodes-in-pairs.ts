/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 */

function swapPairs2(head: ListNode | null): ListNode | null {
  let current = head;
  let previous;

  while (current?.next) {
    const next = current.next;
    current.next = next.next;
    next.next = current;

    if (!previous) {
      head = next;
    } else {
      previous.next = next;
    }

    previous = current;
    current = current?.next;
  }

  return head;
};