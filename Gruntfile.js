module.exports = function(grunt) {
  // Configurations
  var pngquant = require("imagemin-pngquant");
  var mozjpeg = require("imagemin-mozjpeg");
  var gifsicle = require("imagemin-gifsicle");

  grunt.initConfig({
    // CONCAT
    concat: {
      js_grunted: {
        src: ["js/*.js"],
        dest: "build/js/scripts.js"
      },
      css_grunted: {
        src: ["css/*.css"],
        dest: "build/css/styles.css"
      }
    },
    // UGLIFY
    uglify: {
      my_target: {
        files: {
          "build/js/scripts.min.js": ["build/js/scripts.js"]
        }
      }
    },
    // WATCH
    watch: {
      js_grunted: {
        files: ["**/*.js"],
        tasks: ["concat"]
      },
      css_grunted: {
        files: ["**/*.css"],
        tasks: ["concat"]
      },
      imageopti: {
        files: ["img/*.*"],
        tasks: ["imagemin"]
      }
    },
    // CSSMIN
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "build/css",
            src: ["*.css", "!*.min.css"],
            dest: "build/css",
            ext: ".min.css"
          }
        ]
      }
    },
    // IMAGEMIN
    imagemin: {
      target: {
        options: {
          optimizationLevel: 3,
          progressive: true,
          use: [pngquant(), mozjpeg(), gifsicle()]
        },
        files: [
          {
            expand: true,
            cwd: "images",
            src: ["**/*.{png,jpg,jpeg,gif}"],
            dest: "build/images"
          }
        ]
      }
    }
  });
  // Default task(s) as follows and to use each, run 'grunt <task>':

  grunt.loadNpmTasks("grunt-contrib-concat");
  // grunt concat
  grunt.loadNpmTasks("grunt-contrib-uglify");
  // grunt uglify
  grunt.loadNpmTasks("grunt-contrib-watch");
  // grunt watch
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  // grunt cssmin
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  // grunt imagemin

  grunt.registerTask("default", ["imagemin"]);
  // to minify images run 'grunt'
  grunt.registerTask("mini", ["uglify", "cssmin"]);
  // to minify -JS and -CSS run 'grunt mini'
};
