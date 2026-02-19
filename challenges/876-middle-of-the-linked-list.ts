/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 */

function middleNode2(head: ListNode | null | undefined): ListNode | null | undefined {
  let current = head;
  let size = 1;
  let middle = 1;

  while (current?.next) {
    size++;
    current = current?.next
  }

  middle = size % 2 === 0 ? size / 2 : Math.floor(size / 2);

  for (let i = 0; i < middle; i++) {
    head = head?.next;
  }

  return head;
};
