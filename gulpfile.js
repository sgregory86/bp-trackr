'use strict';

var gulp = require('gulp'),
    args = require('yargs').argv,
    plug = require('gulp-load-plugins')();

gulp.task('sass', function() {
    return gulp.src('src/client/styles/master.scss')
        .pipe(plug.plumber())
        .pipe(plug.sass())
        .pipe(plug.csso())
        .pipe(plug.rename('master.min.css'))
        .pipe(gulp.dest('src/client/styles'));
});

gulp.task('htmlhint', function() {
    return gulp.src('src/client/index.html')
        .pipe(plug.htmlhint())
        .pipe(plug.htmlhint.reporter());
});

gulp.task('jshint', function() {
    return gulp.src([
            'src/client/app/**/*.js',
            '!src/client/app/app.min.js',
            '!bower_components/**'
        ])
        .pipe(plug.jshint())
        .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('compress', function() {
    return gulp.src([
            'bower_components/angular/angular.min.js',
            'bower_components/angular-strap/dist/angular-strap.js',
            'bower_components/angular-strap/dist/angular-strap.tpl.js',
            'bower_components/angular-messages/angular-messages.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/moment/moment.js',
            'src/client/app/app.module.js',
            'src/client/app/app.route.js',
            'src/client/app/core/core.module.js',
            'src/client/app/core/config.js',
            'src/client/app/core/dataservice.js',
            'src/client/app/dashboard/dashboard.module.js',
            'src/client/app/dashboard/dashboard.controller.js',
            'src/client/app/add/add.module.js',
            'src/client/app/add/add.controller.js',
            'src/client/app/controllers/add.js',
            'src/client/app/shared/filters/*.js'
        ])
        .pipe(plug.concat('app.min.js'))
        .pipe(gulp.dest('src/client/app'));
});

gulp.task('bump', function() {
    return gulp.src(['./bower.json', './package.json'])
        .pipe(plug.bump({
            version: args.version
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('src/client/styles/*.scss', ['sass']);
    gulp.watch('src/client/index.html', ['htmlhint']);
    gulp.watch('src/client/app/**/*.js', ['jshint']);
});

gulp.task('build', ['sass', 'compress']);

gulp.task('default', ['htmlhint', 'jshint', 'watch']);