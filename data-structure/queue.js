class Queue {
  constructor() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const element = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    return element;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.lowestCount === this.count;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  toString() {
    return Object.values(this.items).reduce((accumulator, current, index) =>
      index === 0 ? `${current}` : (accumulator += `,${current}`)
    );
  }
  4;
}

export { Queue };
