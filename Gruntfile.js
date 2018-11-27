module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
          options: {
            separator: ';',
          },
          dist: {
            src: ['src/lib.js', 'src/main.js'],
            dest: 'dist/app.js',
          },
        },
      });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Default task(s).
    grunt.registerTask('default', ['concat']);
  
  };