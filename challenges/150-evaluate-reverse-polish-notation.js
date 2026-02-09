/**
 * https://leetcode.com/problems/add-two-numbers/
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const value = parseInt(tokens[i], 10);
    if (!isNaN(value)) {
      stack.push(value);
    } else {
      const right = stack.pop();
      const left = stack.pop();

      if (tokens[i] === "+") {
        stack.push(left + right);
      } else if (tokens[i] === "-") {
        stack.push(left - right);
      } else if (tokens[i] === "*") {
        stack.push(left * right);
      } else {
        const result = left / right;
        stack.push(Math.floor(Math.abs(result)) * Math.sign(result));
      }
    }
  }

  return stack.pop();
};
