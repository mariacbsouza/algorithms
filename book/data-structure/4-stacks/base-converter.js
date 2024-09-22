import { StackArray } from "../../../data-structure/stack-array.js";

const baseConverter = (decimalNumber, base = 2) => {
  if (!(base >= 2 && base <= 36)) {
    return "Base not supported";
  }

  const stack = new StackArray();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decimalNumber;

  while (number > 0) {
    const rem = Math.floor(number % base);
    number = Math.floor(number / base);

    stack.push(`${rem}`);
  }

  let binary = "";
  while (!stack.isEmpty()) {
    binary += digits[stack.pop()];
  }

  return binary;
};

export { baseConverter };
