describe('Calculator.js', function () {
  it('should add number to the total', function () {
    //expect 5+5 to be 10
    //expect(5 + 5).toBe(10);

    const calculator = new Calculator();
    calculator.add(5);
    //expect total to be 5
    expect(calculator.total).toBe(5);
  });

  it('should subtract number from the total', function () {
    //TODO: Expectations
  });

  it('should multiply number with the total', function () {
    //TODO: Expectations
  });

  it('should divide number by the total', function () {
    //TODO: Expectations
  });
});
