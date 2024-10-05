/**
 * https://leetcode.com/problems/time-needed-to-buy-tickets/
 */
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  const numberOfTickets = tickets[k];
  let count = 0;

  for (let i = 0; i < tickets.length; i++) {
    const current = tickets[i];

    if (i > k) {
      count += current >= numberOfTickets ? numberOfTickets - 1 : current;
    } else {
      count += current > numberOfTickets ? numberOfTickets : current;
    }
  }

  return count;
};
