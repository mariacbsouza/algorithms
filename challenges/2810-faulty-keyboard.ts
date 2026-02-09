/**
 * https://leetcode.com/problems/faulty-keyboard/
 */

function finalString(s: string): string {
  if (!s) return s;

  let length = s.length;
  let finalString: string[] = [];

  for (let i = 0; i < length; i++) {
    const current = s[i];
    if (current === "i") {
      finalString.reverse();
      continue;
    }

    finalString.push(current);
  }

  return finalString.join("");
}
