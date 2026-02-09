/**
 * @param {number[]} list
 * @return {number[]}
 */

const findMinorValue = (list, afterTo) => {
  let minorIndex = afterTo === null ? 0 : afterTo + 1;

  for (let i = afterTo + 1; i < list.length; i++) {
    if (
      list[i] < list[minorIndex] &&
      (afterTo === null || list[i] > list[afterTo])
    ) {
      minorIndex = i;
    }
  }

  return minorIndex;
};

const selectionSort = (list) => {
  for (let i = 0; i < list.length; i++) {
    const minorValueIndex = findMinorValue(list, i === 0 ? null : i - 1);

    const aux = list[i];
    list[i] = list[minorValueIndex];
    list[minorValueIndex] = aux;
  }

  return list;
};

export { selectionSort };
