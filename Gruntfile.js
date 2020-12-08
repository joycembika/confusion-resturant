'use strict';

const sass = require('node-sass');
 




module.exports = grunt => {
    // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    
    require('time-grunt')(grunt);

    require('jit-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
    
        },
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev:{
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    
    });
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};

