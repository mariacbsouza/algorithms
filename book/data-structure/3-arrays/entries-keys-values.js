const list = ["A", "B", "C", "D", "E"];

// Create an iterator of the array that has [key, value] for each element
const entries = list.entries();
for (let entry of entries) {
  console.log(entry);
}
/**
 * [ 0, 'A' ]
 * [ 1, 'B' ]
 * [ 2, 'C' ]
 * [ 3, 'D' ]
 * [ 4, 'E' ]
 */

// Create an iterator of the array that return its index
const keys = list.keys();
for (let key of keys) {
  console.log(key);
}
/**
 * 0
 * 1
 * 2
 * 3
 * 4
 */

// Create an iterator of the array that return its value
const values = list.values();
for (let value of values) {
  console.log(value);
}
/**
 * A
 * B
 * C
 * D
 * E
 */
