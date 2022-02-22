class ArithmeticError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ArithmeticError';
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
  }
}

function Calculator() {
  this.total = 0;
}

Calculator.prototype.add = function (number) {
  return (this.total += number);
};
Calculator.prototype.subtract = function (number) {
  return (this.total -= number);
};
Calculator.prototype.multiply = function (number) {
  return (this.total *= number);
};
Calculator.prototype.divide = function (number) {
  if (number === 0) {
    throw new ArithmeticError('number cannot be zero');
  }
  return (this.total /= number);
};

Object.defineProperty(Calculator.prototype, 'version', {
  get: function () {
    return fetch(
      'https://gist.githubusercontent.com/leelanarasimha/4b3dde448c828ec54f29fcc727c680df/raw/096bb0f055877c5f8e7243518be7be03772d2c4a/version.json'
    )
      .then(function (result) {
        return result.json();
      })
      .then(function (jsonData) {
        return jsonData.version;
      });
  },

  configurable: true,
  enumerable: true
});
