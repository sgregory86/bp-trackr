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
            '!public/app.min.js',
            '!public/bundle.js',
            '!public/bower_components/**'
        ])
        .pipe(plug.jshint())
        .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('compress', function() {
    return gulp.src([
            'public/bower_components/angularjs/angular.min.js',
            'public/bower_components/angular-strap/dist/angular-strap.js',
            'public/bower_components/angular-strap/dist/angular-strap.tpl.js',
            'public/bower_components/angular-messages/angular-messages.js',
            'public/bower_components/angular-resource/angular-resource.js',
            'public/bower_components/angular-route/angular-route.js',
            'public/bower_components/moment/moment.js',
            'public/bundle.js',
            'public/app.js',
            'public/services/*.js',
            'public/controllers/main.js',
            'public/controllers/add.js',
            'public/filters/*.js'
        ])
        .pipe(plug.concat('app.min.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
    gulp.watch('public/css/*.scss', ['sass']);
    gulp.watch('public/index.html', ['htmlhint']);
    gulp.watch('public/**/*.js', ['jshint']);
});

gulp.task('default', ['sass', 'htmlhint', 'jshint', 'watch']);