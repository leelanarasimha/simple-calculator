describe('Calculator.js', function () {
  it('should add number to the total', function () {
    const calculator = new Calculator();
    calculator.add(5);

    expect(calculator.total).toBe(5);
  });

  it('should subtract number from the total', function () {
    //TODO: Expectations
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.subtract(5);
    expect(calculator.total).toBe(25);
  });

  it('should multiply number with the total', function () {
    //TODO: Expectations
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.multiply(2);
    expect(calculator.total).toBe(20);
  });

  it('should divide number by the total', function () {
    //TODO: Expectations
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.divide(2);
    expect(calculator.total).toBe(5);
  });
});
