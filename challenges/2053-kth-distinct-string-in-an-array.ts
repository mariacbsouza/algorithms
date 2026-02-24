/**
 * https://leetcode.com/problems/kth-distinct-string-in-an-array/
 */
function kthDistinct(arr: string[], k: number): string {
  if (!arr || !k) return "";

  const dict: { [word: string]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (dict[current]) {
      dict[current] += 1;
      continue;
    }

    dict[current] = 1;
  }

  const distinct: string[] = [];
  for (let [word, occurrences] of Object.entries(dict)) {
    if (occurrences === 1) {
      distinct.push(word);
    }
  }

  if (distinct.length >= k) {
    return distinct[k - 1];
  }

  return "";
}
