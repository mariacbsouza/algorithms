/**
 * https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function (grid) {
  const length = grid.length;
  const maxIndex = grid.map((row) => row.lastIndexOf(1)).sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    if (maxIndex[i] > i) {
      return -1;
    }
  }

  let swaps = 0;

  for (let i = 0; i < length; i++) {
    let targetLine = 0;

    if (grid[i].lastIndexOf(1) <= i) {
      continue;
    }

    for (let j = i + 1; j < length; j++) {
      if (grid[j].lastIndexOf(1) <= i) {
        targetLine = j;
        break;
      }
    }

    for (let j = targetLine; j > i; j--) {
      [grid[j], grid[j - 1]] = [grid[j - 1], grid[j]];
      swaps++;
    }
  }

  return swaps;
};
