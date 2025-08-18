/**
 * https://leetcode.com/problems/min-stack/
 */
class MinStack {
  mainStack: number[];
  minimumStack: number[];
  minimum: number;

  constructor() {
    this.mainStack = [];
    this.minimumStack = [];
  }

  push(val: number): void {
    if ((!this.minimum && this.minimum !== 0) || this.minimum >= val) {
      this.minimumStack.push(val);
      this.minimum = val;
    }

    this.mainStack.push(val);
  }

  pop(): void {
    if (!this.isEmpty()) {
      const removed = this.mainStack.pop();
      if (removed === this.minimum) {
        this.minimumStack.pop();
        this.minimum = this.minimumStack[this.size("min") - 1];
      }
    }
  }

  top(): number | undefined {
    if (!this.isEmpty()) {
      return this.mainStack[this.size("main") - 1];
    }
  }

  getMin(): number {
    return this.minimum;
  }

  isEmpty(): boolean {
    return this.size("main") === 0;
  }

  size(stack: "main" | "min"): number {
    return stack === "main" ? this.mainStack.length : this.minimumStack.length;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
