const list = ["Maria", "Pedro", "João", "Maria", "Clara", "Luisa"];

// Return the first occurrence of the parameter in the array or undefined if doesn't find it
let elementOfFirstOccurrence = list.find((element) => element === "Maria");
console.log(elementOfFirstOccurrence); // "Maria"

elementOfFirstOccurrence = list.find((element) => element === "Maria Clara");
console.log(elementOfFirstOccurrence); // undefined

// Return the index of the first occurrence of the parameter in the array or -1 if doesn't find it
let indexOfFirstOccurrence = list.findIndex((element) => element === "Maria");
console.log(indexOfFirstOccurrence); // 0

indexOfFirstOccurrence = list.findIndex((element) => element === "Maria Clara");
console.log(indexOfFirstOccurrence); // -1

// Return the index of the first occurrence of the parameter in the array or -1 if doesn't find it
indexOfFirstOccurrence = list.indexOf("Maria");
console.log(indexOfFirstOccurrence); // 0

indexOfFirstOccurrence = list.indexOf("Maria Clara");
console.log(indexOfFirstOccurrence); // -1

// Return the index of the last occurrence of the parameter in the array or -1 if doesn't find it
let indexOfLastOccurrence = list.lastIndexOf("Maria");
console.log(indexOfLastOccurrence); // 3

indexOfLastOccurrence = list.lastIndexOf("Maria Clara");
console.log(indexOfLastOccurrence); // -1

// Return true if the element has been found in the array and false if not
let foundElement = list.includes("Maria");
console.log(foundElement); // true

foundElement = list.includes("Maria Clara");
console.log(foundElement); // false
