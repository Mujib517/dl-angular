//TDD
export class Calculator {

  add(a, b) {
    if (a === 0) return 0;
    if (b === 0) return -1;
    if (b < 0) return 0;
    return a + b;
  }

  sub(a, b) {
    return a - b;
  }
}