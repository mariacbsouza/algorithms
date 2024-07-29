/**
 * @param {any[]} list
 * @return {any[]}
 */

const reverseArray = (list) => {
  let left = 0,
    right = list.length - 1;

  while (left < right) {
    const aux = list[left];
    list[left] = list[right];
    list[right] = aux;

    left += 1;
    right -= 1;
  }

  return list;
};

export { reverseArray };
