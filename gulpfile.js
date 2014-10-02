var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  gulp.src('public/css/master.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(csso())
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch('public/css/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);