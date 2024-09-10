function testTruthy(value) {
  return value ? console.log(value, "truthy") : console.log(value, "falsy");
}

testTruthy(undefined); // falsy
testTruthy(null); // falsy

// Number is false only for +0/-0/NaN
testTruthy(-1); // truthy
testTruthy(-0); // falsy
testTruthy(0); // falsy
testTruthy(NaN); // falsy

// String is false only if length is equal zero
testTruthy(""); // falsy
testTruthy("Test"); // truthy

// Object is always true
testTruthy(new Boolean(false)); // truthy
testTruthy(new String("")); // truthy

// Array is always true
testTruthy([]); // truthy
