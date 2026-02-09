const list = [1, 2, 3, 4, 5];

// Add a value to the beginning of the array
list.unshift(0);
console.log(list); // [0, 1, 2, 3, 4, 5]

// Remove a value from the beginning of the array
list.shift();
console.log(list); // [1, 2, 3, 4, 5]

// Remove value without remove array index
delete list[0];
console.log(list); // [undefined, 2, 3, 4, 5]

// Remove values from the middle of the array
// first parameter: start index
// second parameter: delete count
list.splice(0, 2);
console.log(list); // [3, 4, 5]

// Add values in the middle of the array
// first parameter: start index
// second parameter: delete count - in this case 0
// following parameters: elements to be added
list.splice(0, 0, 0, 1, 2);
console.log(list); // [0, 1 , 2, 3, 4, 5]
