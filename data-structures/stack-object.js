class StackObject {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (!this.isEmpty()) {
      this.count--;
      const element = this.items[this.count];
      delete this.items[this.count];
      return element;
    }

    return undefined;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.count - 1];
    }

    return undefined;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    return Object.values(this.items).reduce((accumulator, current, index) =>
      index === 0 ? `${current}` : (accumulator += `,${current}`)
    );
  }
}

export { StackObject };
