const list = [0, 1, 2, 3, 4];
const secondList = [5, 6, 7, 8, 9];
const number = 10;

// Join all elements into a string
// parameter: separator to be used between elements
const listString = list.join(" - ");
console.log(listString); // 0 - 1 - 2 - 3 - 4

// Join all elements as a string
const listAsString = list.toString();
console.log(listAsString); // 0,1,2,3,4,5

// Join multiple arrays (also variables) into one (copy)
const newList = list.concat(secondList, number);
console.log(newList); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
