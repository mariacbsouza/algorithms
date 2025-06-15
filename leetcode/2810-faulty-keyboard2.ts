/**
 * https://leetcode.com/problems/faulty-keyboard/
 */

function finalString2(s: string): string {
  if (!s) return "";

  let order = "",
    reverse = "";
  let length = s.length;

  for (let i = 0; i < length; i++) {
    const current = s[i];

    if (current === "i") {
      // [order, reverse] = [reverse, order];
      const aux = order;
      order = reverse;
      reverse = aux;
      continue;
    }

    order += current;
    reverse = current + reverse;
  }

  return order;
}
