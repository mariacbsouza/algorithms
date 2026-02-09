/**
 * https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
 */
/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => b - a);
  let pointer = 1;
  let counter = 0;

  while (pointer < (2 * piles.length) / 3) {
    counter += piles[pointer];
    pointer += 2;
  }

  return counter;
};
