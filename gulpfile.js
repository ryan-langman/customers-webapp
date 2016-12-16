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

    // Include module declarations before services/controllers etc.
    'public/**/*.model.js',

    // Everything else
    'public/**/*.js',

    // Exclude test files
    '!public/**/*.spec.js',
    '!public/**/*.e2e.js'
  ],
  vendor: [
    'bower_components/jQuery/dist/jquery.js',
    'bower_components/bootstrap/dist/bootstrap.js',
    'bower_components/bootstrap/js/collapse.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-ui-mask/dist/mask.js',
    'bower_components/angular-messages/angular-messages.js'    
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
  gulp.watch(source.app, ['build']);
});

gulp.task('prod', function() {
});

gulp.task('dev', ['build', 'vendor', 'watch']);
