const list = [0, 1, 2, 3, 4];

// Create a NEW array from an existing array starting from the specified index
// first parameter: start index
// second parameter: end index (stop before this index)
const sliceOfList = list.slice(1);
console.log(sliceOfList); // [1, 2, 3, 4]

const sliceOfListWithEnd = list.slice(2, 4);
console.log(sliceOfListWithEnd); // [2, 3]

// Create a NEW array from other
const listFrom = Array.from(list);
console.log(listFrom); // [true, false, true, false, true]
const evenList = Array.from(list, (item) => item % 2 === 0);
console.log(evenList); // [true, false, true, false, true]

// Create a NEW array from the parameter
const listOf = Array.of("A", "B", "C");
console.log(listOf); // ['A', 'B', 'C']
