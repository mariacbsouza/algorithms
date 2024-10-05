/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  if (s.length === 1) return s;

  const stack = [s[0]];
  s = s.slice(1);

  while (s.length > 0) {
    if (stack.length && stack[stack.length - 1] === s[0]) {
      stack.pop();
    } else {
      stack.push(s[0]);
    }

    s = s.slice(1);
  }

  return stack.join("");
};
