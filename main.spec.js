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
    xit('Calls subtract');
    xit('Calls multiply');
    xit('Calls divide');
    xit('Validate Operation');
    xit('calls updateResult');
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
});
