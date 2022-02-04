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

  //ToBe Matcher (===)
  it('should initialize the total', function () {
    const calculator = new Calculator();
    //let person1 = { name: 'leela' };
    //let person2 = { name: 'leela' };

    //expect(person1).toBe(person1);
    expect(calculator.total).toBeFalsy();
    expect(calculator.total).toBe(0);
  });

  //ToEqual Matcher
  it('should initialize the calculator', function () {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();

    expect(calculator1).toBeTruthy();
    expect(calculator2).toBeTruthy();
    expect(calculator1).toEqual(calculator2);
  });

  //not matcher
  it('should have unique calculator object', function () {
    const calculator1 = new Calculator();
    const calculator2 = new Calculator();
    expect(calculator1).not.toBe(calculator2);
  });

  //TobeUndefined
  it('should have common methods', function () {
    const calculator = new Calculator();
    expect(calculator.add).not.toBeUndefined();
    expect(calculator.multiply).not.toBeUndefined();
    expect(calculator.subtract).toBeDefined();
    expect(calculator.divide).toBeDefined();
  });

  //tobeNUll
  it('can overwrite total value', function () {
    const calculator = new Calculator();
    calculator.total = null;
    expect(calculator.total).toBeNull();
  });

  //tocontain matcher
  it('should have the calculator constructor', function () {
    const calculator = new Calculator();
    let arr = [1, 2, 3, 4];
    expect(arr).toContain(3);
    expect(calculator.constructor.name).toContain('Calc');
  });

  //toBeNaN Matcher
  it('doesnot handle NaN for multiply', function () {
    const calculator = new Calculator();
    calculator.total = 10;
    calculator.multiply('a');
    expect(calculator.total).toBeNaN();
  });

  //toThrow matcher
  it('should throw error when divide by zero', function () {
    const calculator = new Calculator();
    calculator.total = 10;
    expect(function () {
      calculator.divide(0);
    }).toThrow();

    expect(function () {
      calculator.divide(0);
    }).toThrow(new Error('number cannot be zero'));
  });
});
