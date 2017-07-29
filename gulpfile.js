var gulp = require('gulp');

gulp.task('name', function() {
    //implementation of the task
});

var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('sass/main.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assets'))
});

var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});


var gutil = require('gulp-util');

gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});