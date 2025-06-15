/**
 * https://leetcode.com/problems/merge-sorted-array/
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const length = m + n;
  const aux = Array(length);
  let auxPointer = 0;
  let firstPointer = 0;
  let secondPointer = 0;

  while (auxPointer < length) {
    if (firstPointer === m || nums1[firstPointer] > nums2[secondPointer]) {
      aux[auxPointer] = nums2[secondPointer];
      secondPointer++;
    } else {
      aux[auxPointer] = nums1[firstPointer];
      firstPointer++;
    }

    auxPointer++;
  }

  for (let i = 0; i < length; i++) {
    nums1[i] = aux[i];
  }
};
