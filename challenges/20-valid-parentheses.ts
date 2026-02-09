/**
 * https://leetcode.com/problems/valid-parentheses/
 */

const pairs = {
  "(": ")",
  "{": "}",
  "[": "]",
};

function isValid(s: string): boolean {
  const stack: string[] = [];
  const splittedString = s.split("");

  for (let current of splittedString) {
    if ("({[".includes(current)) {
      stack.push(current);
      continue;
    }

    const openCharacter = stack.pop() || "";
    if (pairs[openCharacter] !== current) {
      return false;
    }
  }

  return stack.length === 0;
}
