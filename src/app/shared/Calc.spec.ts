import { Calculator } from './Calc';

//simple
//fast
//indepndent
//mocked
//flaky

describe("Calculator", function () {

  var calc;

  beforeEach(function () {
    calc = new Calculator();
  });

  describe("add()", () => {

    it("Should add two numbers and return result", () => {
      //AAA: Arrange Act Assert
      //Red- green- refactor

      var res = calc.add(10, 20);

      expect(res).toBe(30);
    });

    it("Should return 0 when first parameter zero", () => {

      var res = calc.add(0, 100);

      expect(res).toBe(0);
    });

    it("Should return -1 when second parameter is zero", () => {

      var res = calc.add(100, 0);

      expect(res).toBe(-1);
    });

    it("Should return 0 when b is less than zero", () => {

      var res = calc.add(100, -100);

      expect(res).toBe(0);
    });
  });

  describe("sub()", function () {

    it("Should subtract two numbers and return result", () => {
      var res = calc.sub(20, 10);
      expect(res).toBe(10);
    });
  });

});