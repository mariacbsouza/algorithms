/**
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 */
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let pointer = 0;

  while (students.includes(sandwiches[0])) {
    if (sandwiches[0] === students[pointer]) {
      sandwiches.shift();
      students.splice(pointer, 1);
    }

    pointer = pointer + 1 >= students.length ? 0 : pointer + 1;
  }

  return sandwiches.length;
};
