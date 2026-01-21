/**
 * https://leetcode.com/problems/palindrome-number/
 */
function isPalindrome(x: number): boolean {
  const string = String(x);
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
