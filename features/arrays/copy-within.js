const numbers = [1, 2, 3, 4, 5, 6];

// Copy values from the array for another position
// first parameter: target start index
// second parameter: index to start getting values
// third parameter: index to stop getting values (not included)
numbers.copyWithin(0, 3);
console.log(numbers); // [4, 5, 6, 4, 5, 6]

numbers.copyWithin(1, 3, 4);
console.log(numbers); // [4, 4, 6, 4, 5, 6]
