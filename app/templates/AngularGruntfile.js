module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      build: ["build/","docs/","report/","test/coverage/"]
    },

    plato: {
      analyze: {
        options : {
        exclude: /\.min\.js$/   // excludes source files finishing with ".min.js"
       },       
        files: {
          'report': ['app.js','public/js/controller/*.js','routes/*.js']
        }
      }
    },

    docco: {
      debug: {
        src: ['app.js','public/js/controller/*.js','routes/*.js'],
        options: {
          output: 'docs/'
        }
      }
    },

    nodemon: {
      dev: {
        script: 'test/coverage/instrument/app/app.js',
        options: {
          ext: 'js,json'
        }
      }
    },

    concurrent: {
      target: {
        tasks: ['nodemon'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    copy: {
      instcode: {
        expand: true,
        flatten: true,
        src: ['app.js','public/js/controller/*.js','routes/*.js'],
        dest: 'test/coverage/instrument/app/'
      },
      copyroute:{
        expand: true,
        flatten: true,
        src: ['test/coverage/instrument/app/services.js','test/coverage/instrument/app/index.js','test/coverage/instrument/app/databaseconnection.js'],
        dest: 'test/coverage/instrument/app/routes/'        
      }
    },    

    env: {
      coverage: {
        APP_DIR_FOR_CODE_COVERAGE: '../test/coverage/instrument/app/'
      }
    },

    instrument: {
      files: ['app.js','public/js/controller/*.js','routes/*.js'],
      options: {
        lazy: true,
        basePath: 'test/coverage/instrument/app/'
      }
    },

    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['test/*.js']
    },

    storeCoverage: {
      options: {
        dir: 'test/coverage/reports'
      }
    },

    makeReport: {
      src: 'test/coverage/reports/**/*.json',
      options: {
        type: 'lcov',
        dir: 'test/coverage/reports',
        print: 'detail'
      }
    }           

  });

  grunt.registerTask('clean',['clean']);
  grunt.registerTask('analyze',['clean','plato:analyze','docco','env:coverage', 'instrument','copy:copyroute', 'mochaTest',
    'storeCoverage', 'makeReport']);

  grunt.loadNpmTasks('grunt-ssh');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-plato');
  grunt.loadNpmTasks('grunt-docco');
  grunt.loadNpmTasks('grunt-istanbul');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

};


