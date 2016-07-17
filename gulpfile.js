require('bendystraw')({
  angular: {
    enabled: true
  },

  images: {
    // Pull in images from the `rolodex` npm package
    bower: ['bower_components/rolodex/**/*']
  },

  scripts: {
    coffeescript: true
  }
})
