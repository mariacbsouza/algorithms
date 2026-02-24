/**
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 */

function countStudents(students: number[], sandwiches: number[]): number {
  let circular = 0,
    square = 0;

  for (let i = 0; i < students.length; i++) {
    const current = students[i];

    if (current === 0) {
      circular += 1;
      continue;
    }

    square += 1;
  }

  for (let i = 0; i < sandwiches.length; i++) {
    const current = sandwiches[i];

    if (current === 0) {
      if (circular > 0) {
        circular -= 1;
        continue;
      }
    } else if (square > 0) {
      square -= 1;
      continue;
    }

    break;
  }

  return circular + square;
}
