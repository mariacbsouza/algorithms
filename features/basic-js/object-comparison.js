const person = { name: "Maria" };
const secondPerson = { name: "Maria" };
const thirdPerson = person;
const fourthPerson = person;

// Object comparison only returns true if both objects have the same reference
console.log(person === secondPerson); // false
console.log(thirdPerson === fourthPerson); //true
console.log(person === thirdPerson); //true
