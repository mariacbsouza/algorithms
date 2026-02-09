/**
 * https://leetcode.com/problems/number-of-recent-calls/
 */
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

class RecentCounter {
  constructor() {
    this.values = [];
  }

  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    this.values.push(t);

    while (t - 3000 > this.values[0]) {
      this.values.shift();
    }

    return this.values.length;
  }
}
