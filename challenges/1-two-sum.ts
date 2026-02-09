/**
 * https://leetcode.com/problems/two-sum/description/
 */
function twoSum(nums: number[], target: number): number[] {
  const mappedNumbers = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (mappedNumbers.has(complement)) {
      return [mappedNumbers.get(complement), i];
    }

    mappedNumbers.set(nums[i], i);
  }

  return [];
}
