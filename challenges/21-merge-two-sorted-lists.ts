/**
 * https://leetcode.com/problems/merge-two-sorted-lists
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 && !list2) {
    return list1;
  }

  let head, current;

  while (list1 || list2) {
    const firstValue = list1 ? list1.val : Infinity;
    const secondValue = list2 ? list2.val : Infinity;
    let node;

    if (firstValue <= secondValue) {
      node = new ListNode(firstValue);
      list1 = list1?.next || null;
    } else {
      node = new ListNode(secondValue);
      list2 = list2?.next || null;
    }

    if (!head) {
      head = node;
      current = head;
    } else {
      current.next = node;
      current = current.next;
    }
  }

  return head;
};