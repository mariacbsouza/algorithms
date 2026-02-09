import { Deque } from "../data-structures/deque.js";

const palindromeChecker = (aString) => {
  if (!aString || aString.length === 0) {
    return false;
  }

  const cleanString = aString.toLowerCase().replaceAll(" ", "");
  const deque = new Deque();
  let isEqual = true;

  for (let i = 0; i < cleanString.length; i++) {
    deque.addBack(cleanString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    const leftLetter = deque.removeFront();
    const rightLetter = deque.removeBack();

    if (leftLetter !== rightLetter) {
      isEqual = false;
    }
  }

  return isEqual;
};

export { palindromeChecker };
