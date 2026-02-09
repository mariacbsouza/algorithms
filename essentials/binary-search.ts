const binarySearch = (list: number[], target: number) => {
  let start = 0,
    end = list.length - 1,
    mid = 0;

  while (start <= end) {
    mid = ((start + end) / 2) | 0; // equal Math.floor((start + end) / 2)

    if (list[mid] === target) {
      return mid;
    }

    if (list[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return null;
};

export { binarySearch };
