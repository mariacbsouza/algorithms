/**
 * https://leetcode.com/problems/number-of-recent-calls/
 */
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

class RecentCounter2 {
  queue: number[];

  constructor() {
    this.queue = [];
  }

  ping(t: number): number {
    this.queue.push(t);
    let start = 0,
      end = this.queue.length,
      mid = 0;

    while (start <= end) {
      mid = Math.floor((start + end) / 2);

      if (this.queue[mid] < t - 3000) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return this.queue.length - start;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
