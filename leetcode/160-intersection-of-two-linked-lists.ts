/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null;

  let localA: ListNode | null = headA,
    localB: ListNode | null = headB;

  while (localA !== localB) {
    localA = localA ? localA.next : headB;
    localB = localB ? localB.next : headA;
  }

  return localA;
}
