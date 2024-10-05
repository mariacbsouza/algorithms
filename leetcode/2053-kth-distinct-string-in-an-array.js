/**
 * https://leetcode.com/problems/kth-distinct-string-in-an-array/
 */
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (!map[current]) {
      map[current] = 1;
    } else {
      map[current] += 1;
    }
  }

  const distinctEntries = Object.entries(map).filter(
    ([_, count]) => count === 1
  );

  return distinctEntries?.[k - 1]?.[0] || "";
};
