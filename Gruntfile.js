module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Read docs here: http://gruntjs.com/configuring-tasks
    uglify: {
      options: {
        compress: false,
        mangle:false
      },
      build: {
        files: {
          'dist/<%= pkg.name %>.min.js': 'src/<%= pkg.name %>.js'
        }
      }
    },
    watch: {
      files: ['src/*.js'],
      tasks: ['uglify']
    },
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Default task(s).
  grunt.registerTask('default', [
      'uglify',
  ]);

};