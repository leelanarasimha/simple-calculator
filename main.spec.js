describe('main.js', function () {
  describe('calculate()', function () {
    it('validate expression if the first number is invalid', function () {
      spyOn(window, 'updateResult'); //and.stub is the default one and can be omitted
      calculate('a+3');
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it('validate expression if the second number is invalid', function () {
      spyOn(window, 'updateResult');
      calculate('3+a');
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it('validate expression if the operation is invalid', function () {
      spyOn(window, 'updateResult');
      calculate('3_3');
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it('Calls add', function () {
      const spy = spyOn(Calculator.prototype, 'add');
      calculate('3+2');

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenCalledWith(2);
      expect(spy).toHaveBeenCalledWith(3);
    });
    it('Calls subtract', function () {
      const spy = spyOn(Calculator.prototype, 'subtract');
      calculate('3-2');
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(2);
      expect(spy).not.toHaveBeenCalledWith(3);
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('Calls multiply', function () {
      const spy = spyOn(Calculator.prototype, 'multiply');
      calculate('4*5');
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(5);
      expect(spy).not.toHaveBeenCalledWith(4);
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('Calls divide', function () {
      const spy = spyOn(Calculator.prototype, 'divide');
      calculate('6/3');
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(3);
      expect(spy).not.toHaveBeenCalledWith(6);
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('calls updateResult (example for callThrough)', function () {
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'multiply').and.callThrough();
      calculate('3*9');

      expect(window.updateResult).toHaveBeenCalled();
      expect(Calculator.prototype.multiply).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(27);
    });

    it('calls updateResult (example for callFake)', function () {
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'multiply').and.callFake(function () {
        return 'Fake Call';
      });
      calculate('3*9');

      expect(window.updateResult).toHaveBeenCalled();
      expect(Calculator.prototype.multiply).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Fake Call');
    });

    it('calls updateResult (example for returnValue)', function () {
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'multiply').and.returnValue('returns a value');
      calculate('3*9');

      expect(window.updateResult).toHaveBeenCalled();
      expect(Calculator.prototype.multiply).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('returns a value');
    });

    it('calls updateResult (example for returnValues)', function () {
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'add').and.returnValues(null, 'second call');
      calculate('3+3');

      expect(window.updateResult).toHaveBeenCalled();
      expect(Calculator.prototype.add).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('second call');
    });

    it('doesnot handle errors', function () {
      spyOn(Calculator.prototype, 'multiply').and.throwError('Some error');
      expect(function () {
        calculate('3*3');
      }).toThrowError('Some error');
    });
  });

  describe('updateResult()', function () {
    beforeAll(function () {
      const element = document.createElement('div');
      element.setAttribute('id', 'result');
      document.body.appendChild(element);
      this.element = element;
    });
    afterAll(function () {
      document.body.removeChild(this.element);
    });
    it('add result to the dom element', function () {
      updateResult('5');
      expect(this.element.innerText).toBe('5');
    });
  });

  describe('showVersion()', function () {
    it('should call the showversion method', function (done) {
      const element = spyOn(document, 'getElementById').and.returnValue({
        innerText: null
      });
      const spy = spyOnProperty(Calculator.prototype, 'version', 'get').and.returnValue(
        Promise.resolve('0.9')
      );

      showVersion();
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      spy().then(function (version) {
        expect(element().innerText).toBe(version);
        done();
      });
    });
  });
});
