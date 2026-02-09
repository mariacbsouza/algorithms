/**
 * https://leetcode.com/problems/add-two-numbers/
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (tokens.length === 1) {
    return parseInt(tokens[0]);
  }

  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const current = tokens[i];
    if ("+-*/".includes(current)) {
      const right = parseInt(stack.pop(), 10);
      const left = parseInt(stack.pop(), 10);

      switch (current) {
        case "+":
          stack.push(left + right);
          break;
        case "-":
          stack.push(left - right);
          break;
        case "*":
          stack.push(left * right);
          break;
        default:
          stack.push(Math.trunc(left / right));
          break;
      }
    } else {
      stack.push(current);
    }
  }

  return stack.pop();
};
