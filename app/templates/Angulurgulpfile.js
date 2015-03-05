var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha=require('gulp-mocha'),
    istanbul = require('gulp-istanbul');

gulp.task('default', ['test','lint']);

gulp.task('test',function (cb) {

       var coverageSrc = ['gulp/test.js','app.js','routes/*.js'];

    gulp.src(coverageSrc)
    .pipe(istanbul()) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
     return gulp.src(coverageSrc)
        .pipe(mocha())
         .pipe(istanbul.writeReports({
          dir: './gulpcodecoverage',
          reportOpts: {
            dir: './gulpcodecoverage'
          },
          reporters: ['text-summary','html']
        })) // Creating the reports after tests runned
        .on('end', cb);
    });
              
    });


gulp.task('lint',['test'],function() {

  var lintSrc = ['app.js','public/js/*.js','public/js/controller/*.js','routes/*.js'];

  return gulp.src(lintSrc)
    .pipe(jshint())
    .pipe(jshint.reporter('gulp-jshint-html-reporter', {
      filename: __dirname + '/gulpcodecoverage/jshint-output.html'
    }));
});
 





  




