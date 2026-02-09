const numbers = [0, 1, 2, 3, 4];

// Fill the array with the given element
// first parameter: element
// second parameter: start index
// third parameter: end index (not included)
numbers.fill(0);
console.log(numbers); // [0, 0, 0, 0, 0]

numbers.fill(1, 2);
console.log(numbers); // [0, 0, 1, 1, 1]

numbers.fill(-1, 1, 3);
console.log(numbers); // [0, -1, -1, 1, 1]

const zeroes = Array(10).fill(0);
console.log(zeroes); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
