// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {


    grunt.initConfig({

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

        // all of our configuration will go here
        //     // configure jshint to validate js files -----------------------------------


        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            build: ['Gruntfile.js', 'source/**/*.js']
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'styles/scss',
                    cssDir: 'styles/css'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass']
            }
        },
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: { //this is sample setup
                    'dist/js/fileName1.min.js': 'src/js/fileName1.js',
                    'dist/js/fileName2.min.js': 'src/js/fileName2.js',
                    'dist/js/fileName7.min.js': ['src/js/fileName3.js', 'src/js/fileName4.js']
                }
            }
        },
        cssmin: { // same as uglify
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/css/style.min.css': 'src/css/style.css'
                }
            }
        }

    });


    //Lint JS files
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //Minify JS files
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //CSS preprocessor
    grunt.loadNpmTasks('grunt-contrib-compass');
    //Minify CSS files
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //Watch for file changes
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['jshint', 'watch']);
    grunt.registerTask('dev', ['jshint', 'compass']);
    grunt.registerTask('clean', ['jshint', 'compass', 'uglify', 'clean']);

};
