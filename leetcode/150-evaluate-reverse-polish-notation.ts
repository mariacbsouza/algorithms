/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */
function evalRPN1(tokens: string[]): number {
  const stack: number[] = [];

  for (let token of tokens) {
    if ("+-*/".includes(token)) {
      const rightValue = stack.pop() || 0;
      const leftValue = stack.pop() || 0;

      switch (token) {
        case "+":
          stack.push(leftValue + rightValue);
          break;
        case "-":
          stack.push(leftValue - rightValue);
          break;
        case "*":
          stack.push(leftValue * rightValue);
          break;
        default:
          stack.push(Math.trunc(leftValue / rightValue));
          break;
      }
    } else {
      stack.push(Number.parseInt(token));
    }
  }

  return stack.pop() || 0;
}
