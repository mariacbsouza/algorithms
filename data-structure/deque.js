// Double ended queue
class Deque {
  constructor() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const element = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    return element;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const element = this.items[this.count];
    delete this.items[this.count];

    return element;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.lowestCount === this.count;
  }

  size() {
    if (this.isEmpty()) {
      return 0;
    }

    if (this.lowestCount >= 0) {
      return this.count - this.lowestCount;
    }

    if (this.count < 0) {
      return Math.abs(this.lowestCount) - Math.abs(this.count);
    }

    return Math.abs(this.lowestCount) + this.count;
  }

  clear() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }

    let string = `${this.items[this.lowestCount]}`;

    for (let i = this.lowestCount + 1; i < this.count; i++) {
      string += `,${this.items[i]}`;
    }

    return string;
  }
}

export { Deque };
