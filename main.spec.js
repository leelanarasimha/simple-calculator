describe('main.js', function () {
  describe('main()', function () {
    xit('validate expression');
    xit('Calls add');
    xit('Calls subtract');
    xit('Calls multiply');
    xit('Calls divide');
    xit('Validate Operation');
    xit('calls updateResult');
  });
  describe('updateResult()', function () {
    let element;
    beforeAll(function () {
      element = document.createElement('div');
      element.setAttribute('id', 'result');
      document.body.appendChild(element);
    });
    afterAll(function () {
      const element = document.getElementById('result');
      document.body.removeChild(element);
    });
    it('add result to the dom element', function () {
      updateResult('5');
      expect(element.innerText).toBe('5');
    });
  });
});
