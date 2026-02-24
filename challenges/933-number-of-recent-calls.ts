/**
 * https://leetcode.com/problems/number-of-recent-calls/
 */
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

class RecentCounter {
  queue: number[];

  constructor() {
    this.queue = [];
  }

  ping(t: number): number {
    this.queue.push(t);

    while (t - 3000 > this.queue[0]) {
      this.queue.shift();
    }

    return this.queue.length;
  }
}
