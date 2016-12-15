var es = require('event-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');
var fs = require('fs');

var source = {
  app: [
    // Include bootstrapper first
    'public/main.js',

    // Include main app declaration
    'public/app.js',

    // Include module declarations before services/controllers etc.
    'public/**/module.js',

    // Everything else
    'public/**/*.js',

    // Exclude test files
    '!public/**/*.spec.js',
    '!public/**/*.e2e.js'
  ],
  vendor: [
    'bower_components/angular/angular.js'
  ]
}

gulp.task('build', function() {
  return es.merge(gulp.src(source.app))
  .pipe(concat('app.js'))
  .pipe(gulp.dest('build'));
});

gulp.task('vendor', function() {
  return es.merge(gulp.src(source.vendor))
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
});

gulp.task('prod', function() {
});

gulp.task('dev', ['build', 'vendor', 'watch']);
