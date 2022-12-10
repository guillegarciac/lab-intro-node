class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length; 
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.length <= pos) {
      throw new Error('OutOfBounds')
    } else {return this.items[pos]}
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    let result = 0;
    if (this.items.length === 0) return 0;
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i];
    }
    return result;
  }

  avg() {
    let sumItems = 0;
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    if (this.items.length === 1) return this.items[0];
    for (let i = 0; i < this.items.length; i++) {
      sumItems += this.items[i]
    }
    return sumItems / this.items.length
  }
}

module.exports = SortedList;
