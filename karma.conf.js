module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    preprocessors: {
      '*.js': 'coverage'
    },
    files: ['./CustomMatcher.js', '*.js', '*.spec.js'],
    plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-coverage'],
    reporters: ['dots', 'coverage'],
    colors: true,
    singleRun: true,
    browsers: ['ChromeHeadless'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};
