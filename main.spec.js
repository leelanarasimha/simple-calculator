describe('main.js', function () {
  describe('calculate()', function () {
    it('validate expression if the number is invalid', function () {
      spyOn(window, 'updateResult').and.stub();
      calculate('a+3');

      //expect(calculate('a+3')).toBe(5);
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
