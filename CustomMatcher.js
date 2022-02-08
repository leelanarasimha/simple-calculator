const CustomMatcher = {
  toBeCalculator: function () {
    return {
      compare: function (actual, expected) {
        const result = {
          pass: false,
          message: ''
        };

        if (actual instanceof Calculator) {
          result.pass = true;
          result.message = `Expected ${actual} not to be instance of calculator`;
        } else {
          result.pass = false;
          result.message = `Expected ${actual} to be instance of calculator`;
        }

        return result;
      }
    };
  }
};
