/**
 * https://leetcode.com/problems/valid-anagram/
 */
function isAnagram(s: string, t: string): boolean {
  let letterCounter: { [key: string]: number } = {};

  for (let current of s) {
    if (letterCounter[current]) {
      letterCounter[current] += 1;
      continue;
    }

    letterCounter[current] = 1;
  }

  for (let current of t) {
    if (!letterCounter[current]) {
      return false;
    }

    letterCounter[current]--;
  }

  return Object.values(letterCounter).every((count) => count === 0);
}
