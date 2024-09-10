// Variables initialization
const [name, city] = ["John", "São Paulo"];

console.log(`Name: ${name}`);
console.log(`City: ${city}`);

// Variables swap
let firstValue = 10;
let secondValue = 15;

console.log(`First value ${firstValue}`); // 10
console.log(`Second value ${secondValue}`); // 15

[firstValue, secondValue] = [secondValue, firstValue];

console.log(`Updated first value ${firstValue}`); // 15
console.log(`Updated second value ${secondValue}`); // 10
