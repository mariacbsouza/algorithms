class StackArray {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  push(...element) {
    this.items.push(...element);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }

    return undefined;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.size() - 1];
    }

    return undefined;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = [];
  }
}

export { StackArray };
