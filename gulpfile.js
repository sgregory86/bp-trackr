var gulp = require('gulp'),
  plug = require('gulp-load-plugins')();

gulp.task('sass', function() {
  return gulp.src('public/css/master.scss')
    .pipe(plug.plumber())
    .pipe(plug.sass())
    .pipe(plug.csso())
    .pipe(gulp.dest('public/css'));
});

gulp.task('htmlhint', function() {
  return gulp.src('public/index.html')
    .pipe(plug.htmlhint())
    .pipe(plug.htmlhint.reporter());
});

gulp.task('jshint', function() {
  return gulp.src([
      'public/**/*.js',
      '!public/main.js',
      '!public/bower_components/**'
    ])
    .pipe(plug.jshint())
    .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch('public/css/*.scss', ['sass']);
  gulp.watch('public/index.html', ['htmlhint']);
  gulp.watch('public/**/*.js', ['jshint']);
});

gulp.task('default', ['sass', 'htmlhint', 'jshint', 'watch']);