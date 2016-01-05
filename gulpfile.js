require('bendystraw')({
  bowerImages: ['bower_components/rolodex/**/*']
})

var gulp = require('gulp');
var fs = require('fs');

gulp.task('ci', function () {
  var conf = process.env;

  // Pass in --env staging/production
  var args = process.argv.slice(3);

  // Because circleci
  var env = args[1].toUpperCase();

  // Pluck the settings we need (stupid)
  var settings = {};
  var variables = ['API'];

  variables.forEach(function (variable) {
    settings[env] = conf[env + variable]
  })

  var output = '';

  // Make a string to write to file from object
  Object.keys(settings).forEach(function (key) {
    output += key + '=' + settings[key] + '\n';
  })

  fs.writeFile('.env.' + env.toLowerCase(), output);
});
