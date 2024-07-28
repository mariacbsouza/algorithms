/**
 * @param {any[]} list
 * @param {any} target
 * @return {number}
 */

const binarySearch = (list, target) => {
  let start = 0,
    end = list.length - 1,
    mid = 0;

  while (start <= end) {
    mid = ((start + end) / 2) | 0; // equal Math.floor((start + end) / 2)

    if (list[mid] === target) {
      return mid;
    }

    if (list[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

export { binarySearch };
