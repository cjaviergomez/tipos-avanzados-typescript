let numbers = [1, 2, 3, 4, 5];
numbers = [];
numbers.push(6);
numbers.unshift(0);
numbers.pop();

export class Test {
  readonly numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

  setNumbers() {
    this.numbers = [];
    this.numbers.push(6);
    this.numbers.unshift(0);
    this.numbers.pop();
  }
}
