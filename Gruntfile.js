/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
    // define the files to lint
    all: ['Gruntfile.js', 'test/**/*.js', 'lib/**/*.js'],
    // configure JSHint (documented at http://www.jshint.com/docs/)
    options: {
      // more options here if you want to override JSHint defaults

      globals: {
        jQuery: true,
        console: true,
        module: true
        }
      }
    },
    simplemocha: {
      options: {
        timeout: 3000,
        ignoreLeaks: false,
        reporter: 'tap'
      },

      all: { src: ['test/**/*.js'] }
    }
  });

  grunt.registerTask('default', ['simplemocha', 'jshint']);
};
