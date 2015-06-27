var gulp = require('gulp'),
    plug = require('gulp-load-plugins')();

gulp.task('sass', function() {
    return gulp.src('public/styles/master.scss')
        .pipe(plug.plumber())
        .pipe(plug.sass())
        .pipe(plug.csso())
        .pipe(gulp.dest('public/styles'));
});

gulp.task('htmlhint', function() {
    return gulp.src('public/index.html')
        .pipe(plug.htmlhint())
        .pipe(plug.htmlhint.reporter());
});

gulp.task('jshint', function() {
    return gulp.src([
            'public/app/**/*.js',
            '!public/app/app.min.js',
            '!public/app/bundle.js',
            '!public/app/bower_components/**'
        ])
        .pipe(plug.jshint())
        .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('compress', function() {
    return gulp.src([
            'public/app/bower_components/angular/angular.min.js',
            'public/app/bower_components/angular-strap/dist/angular-strap.js',
            'public/app/bower_components/angular-strap/dist/angular-strap.tpl.js',
            'public/app/bower_components/angular-messages/angular-messages.js',
            'public/app/bower_components/angular-resource/angular-resource.js',
            'public/app/bower_components/angular-route/angular-route.js',
            'public/app/bower_components/moment/moment.js',
            'public/app/bundle.js',
            'public/app/app.js',
            'public/app/app.route.js',
            'public/app/services/*.js',
            'public/app/controllers/main.js',
            'public/app/controllers/add.js',
            'public/app/filters/*.js'
        ])
        .pipe(plug.concat('app.min.js'))
        .pipe(gulp.dest('public/app'));
});

gulp.task('watch', function() {
    gulp.watch('public/styles/*.scss', ['sass']);
    gulp.watch('public/index.html', ['htmlhint']);
    gulp.watch('public/app/**/*.js', ['jshint']);
});

gulp.task('default', ['sass', 'htmlhint', 'jshint', 'watch']);