'use strict';

var _ = require('lodash');
var path = require('path');
var wiredep = require('wiredep');

var DEV_PATH = '.dev';
var TEST_PATH = 'test/unit';
var SOURCE_PATH = 'source';

function listFiles() {
  // wiredep grabs the bower dependencies for the app
  // then we concat our app's compiled js files
  // and finally, our tests
  return wiredep().js
    .concat([
      path.join(DEV_PATH, '/**/*.js'),
      path.join(DEV_PATH, '/**/*.html'),
      path.join(TEST_PATH, '/**/*.coffee'),
    ])
    .map(function(pattern) {
      return {
        pattern: pattern
      };
    });
}

module.exports = function(kconfig){
  var configuration = {
    angularFilesort: { whitelist: [path.join(DEV_PATH, '/**/!(*.html|*.spec|*.mock).js')] },
    browsers: ['PhantomJS'],
    files: listFiles(),
    frameworks: ['jasmine', 'angular-filesort'],
    plugins: [
      'karma-coffee-preprocessor',
      'karma-phantomjs-launcher',
      'karma-angular-filesort',
      'karma-jasmine',
    ],
    preprocessors: { '**/*.coffee': ['coffee'] },
  };
  kconfig.set(configuration);
};
