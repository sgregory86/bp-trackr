var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  gulp.src('public/css/master.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(csso())
    .pipe(gulp.dest('public/css'));
});

gulp.task('jshint', function() {
  gulp.src([
    'public/js/**/*.js',
    '!public/js/main.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch('public/css/*.scss', ['sass']);
  gulp.watch('public/js/**/*.js', ['jshint']);
});

gulp.task('default', ['sass', 'jshint', 'watch']);