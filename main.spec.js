describe('main.js', function () {
  describe('calculate()', function () {
    it('validate expression if the first number is invalid', function () {
      spyOn(window, 'updateResult'); //and.stub is the default one and can be omitted
      calculate('a+3');
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
    });

    it('validate expression if the second number is invalid', function () {
      spyOn(window, 'updateResult');
      calculate('3+a');
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
    });

    it('validate expression if the operation is invalid', function () {
      spyOn(window, 'updateResult');
      calculate('3_3');
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
    });

    xit('Calls add');
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
