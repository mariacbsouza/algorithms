/**
 * https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/
 */
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  const stack = [];
  let count = 0;
  let i = 0;

  const isStackEmpty = () => stack.length === 0;

  while (i < s.length) {
    const current = s[i];
    const next = i + 1 >= s.length ? null : s[i + 1];

    if (current === "(") {
      stack.push(current);
      i++;
    } else {
      if (isStackEmpty()) {
        count += next === ")" ? 1 : 2;
        i += next === ")" ? 2 : 1;
      } else {
        count += next === ")" ? 0 : 1;
        i += next === ")" ? 2 : 1;
        stack.pop();
      }
    }
  }

  if (!isStackEmpty()) {
    count += stack.length * 2;
  }

  return count;
};
