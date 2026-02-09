/**
 * https://leetcode.com/problems/group-anagrams/
 */
function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 1 && strs[0] === "") return [[""]];

  const map = new Map();
  const ordered = strs.map((current) => [
    current.split("").sort().join(""),
    current,
  ]);

  for (let [orderedString, originalString] of ordered) {
    if (map.has(orderedString)) {
      const group = map.get(orderedString);
      group.push(originalString);
      map.set(orderedString, group);
      continue;
    }

    map.set(orderedString, [originalString]);
  }

  return Array.from(map.values());
}
