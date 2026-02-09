/**
 * https://leetcode.com/problems/valid-palindrome/
 */
function isPalindrome(s: string): boolean {
  if (s.length === 1) return true;

  const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0,
    right = cleanString.length - 1;

  while (left < right) {
    if (cleanString[left] !== cleanString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
