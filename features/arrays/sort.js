// Sort the array like strings based on ASCII value
const numbers = [1, 2, 3, 10, 20, 30];
numbers.sort();
console.log(numbers); // [1, 10, 2, 20, 3, 30]

// Sort on non-decreasing order
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 10, 20, 30]

// String sorting
const names = ["Maria", "maria", "clara", "Clara", "João", "Joao"];
names.sort((a, b) => a.localeCompare(b));
console.log(names); // ["clara", "Clara", "Joao", "João", "maria", "Maria"]
