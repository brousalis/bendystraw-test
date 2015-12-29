'use strict';

var path = require('path');

var config = {
  paths: {
    src: 'source', // source folder for the app
    dest: 'build', // destination for the production build
    tmp: '.dev', // temporary development build folder

    scripts: 'app', // folder where main javascript files are located
    styles: 'stylesheets', // stylesheets folder
    images: 'images', // image folder
    fonts: 'fonts', // fonts folder
    tests: 'tests' // folder for end to end tests
  }
}

module.exports = function(kconfig){
  var configuration = {
    files: [
      path.join(config.paths.tmp, '/**/*.spec.js'),
      path.join(config.paths.tmp, '/**/*.mock.js'),
      path.join('tests/**/*.js'),
      path.join(config.paths.tmp, '/**/*.html')
    ],

    singleRun: true,

    autoWatch: false,

    frameworks: ['jasmine', 'angular-filesort'],

    angularFilesort: {
      whitelist: [path.join(config.paths.tmp, '/**/!(*.html|*.spec|*.mock).js')]
    },

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-angular-filesort',
      'karma-jasmine',
    ]
  };

  kconfig.set(configuration);
};
