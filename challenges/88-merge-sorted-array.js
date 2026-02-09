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
  const result = Array(m + n);
  let idx = 0;
  let mCounter = 0;
  let nCounter = 0;

  while (idx < m + n) {
    if (mCounter === m) {
      result[idx] = nums2[nCounter];
      nCounter++;
      idx++;
      continue;
    }

    if (nCounter === n) {
      result[idx] = nums1[mCounter];
      mCounter++;
      idx++;
      continue;
    }

    if (nums1[mCounter] >= nums2[nCounter]) {
      result[idx] = nums2[nCounter];
      nCounter++;
    } else {
      result[idx] = nums1[mCounter];
      mCounter++;
    }

    idx++;
  }

  for (let i = 0; i < n + m; i++) {
    nums1[i] = result[i];
  }
};
