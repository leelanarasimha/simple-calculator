describe('Calculator.js', function () {
  describe('Calculator', function () {
    let calculator;
    let calculator2;
    beforeEach(function () {
      //executes before execution of each spec in the suite
      calculator = new Calculator();
      calculator2 = new Calculator();
    });

    afterEach(function () {
      //executes after execution of each spec in the suite
      //clean up after the spec execution
    });

    //tobeNUll
    it('can overwrite total value', function () {
      calculator.total = null;
      expect(calculator.total).toBeNull();
    });

    //anything matcher
    it('should return the total as value', function () {
      calculator.total = 10;
      expect(calculator.total).toEqual(jasmine.anything());
      //expect(null).toEqual(jasmine.anything());
      //expect(undefined).toEqual(jasmine.anything());
    });

    //any Matcher
    it('should be an instance ', function () {
      jasmine.addMatchers(CustomMatcher);

      calculator.total = 10;
      expect(calculator).toEqual(jasmine.any(Object));
      expect(calculator).toEqual(jasmine.any(Calculator));
      expect(calculator.total).toEqual(jasmine.any(Number));
      expect(calculator).toBeCalculator();
    });

    //objectcontaining
    it('should contain total as key', function () {
      calculator.total = 10;
      expect(calculator).toEqual(
        jasmine.objectContaining({
          total: 10
        })
      );

      expect(typeof calculator.total).toEqual(jasmine.stringContaining('ber'));
    });

    //tocontain matcher
    it('should have the calculator constructor', function () {
      let arr = [1, 2, 3, 4];
      expect(arr).toContain(3);
      expect(calculator.constructor.name).toContain('Calc');
    });
    //ToBe Matcher (===)
    it('should initialize the total', function () {
      //let person1 = { name: 'leela' };
      //let person2 = { name: 'leela' };

      //expect(person1).toBe(person1);
      expect(calculator.total).toBeFalsy();
      expect(calculator.total).toBe(0);
    });

    //ToEqual Matcher
    it('should initialize the calculator', function () {
      expect(calculator).toBeTruthy();
      expect(calculator2).toBeTruthy();
      expect(calculator).toEqual(calculator2);
    });

    //not matcher
    it('should have unique calculator object', function () {
      expect(calculator).not.toBe(calculator2);
    });

    //TobeUndefined
    it('should have common methods', function () {
      expect(calculator.add).not.toBeUndefined();
      expect(calculator.multiply).not.toBeUndefined();
      expect(calculator.subtract).toBeDefined();
      expect(calculator.divide).toBeDefined();
    });

    describe('add()', function () {
      it('should add number to the total', function () {
        calculator.add(5);

        expect(calculator.total).toBe(5);
      });

      //toMatch Matcher
      it('should return total a number', function () {
        calculator.total = 10;
        expect(calculator.add(10)).toBe(20);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch('ber');
      });
    });

    describe('subtract()', function () {
      it('should subtract number from the total', function () {
        //TODO: Expectations

        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);
      });
    });

    describe('multiply', function () {
      it('should multiply number with the total', function () {
        //TODO: Expectations

        calculator.total = 10;
        calculator.multiply(2);
        expect(calculator.total).toBe(20);
      });

      //toBeNaN Matcher
      it('doesnot handle NaN for multiply', function () {
        calculator.total = 10;
        calculator.multiply('a');
        expect(calculator.total).toBeNaN();
      });
    });

    describe('divide()', function () {
      it('should divide number by the total', function () {
        //TODO: Expectations

        calculator.total = 10;
        calculator.divide(2);
        expect(calculator.total).toBe(5);
      });
      //toThrow matcher
      it('should throw error when divide by zero', function () {
        calculator.total = 10;
        expect(function () {
          calculator.divide(0);
        }).toThrow();

        expect(function () {
          calculator.divide(0);
        }).toThrow(new Error('number cannot be zero'));
      });
      //toThrowError Matcher
      it('should throw error with message when divide by zero', function () {
        calculator.total = 10;
        expect(function () {
          calculator.divide(0);
        }).toThrowError();
        expect(function () {
          calculator.divide(0);
        }).toThrowError('number cannot be zero');

        expect(function () {
          calculator.divide(0);
        }).toThrowError(ArithmeticError, 'number cannot be zero');
      });
    });

    describe('get Version', function () {
      it('fetches version from external source', async function () {
        spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response('{"version": "0.4"}')));
        const version = await calculator.version;
        expect(version).toBe('0.4');
      });
    });
  });
});
