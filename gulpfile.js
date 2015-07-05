'use strict';

var gulp = require('gulp'),
    args = require('yargs').argv,
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
            'public/app/app.module.js',
            'public/app/app.route.js',
            'public/app/core/core.module.js',
            'public/app/core/config.js',
            'public/app/dashboard/dashboard.module.js',
            'public/app/dashboard/dashboard.controller.js',
            'public/app/add/add.module.js',
            'public/app/add/add.controller.js',
            'public/app/shared/services/*.js',
            'public/app/controllers/add.js',
            'public/app/shared/filters/*.js'
        ])
        .pipe(plug.concat('app.min.js'))
        .pipe(gulp.dest('public/app'));
});

gulp.task('bump', function() {
    return gulp.src(['./bower.json', './package.json'])
        .pipe(plug.bump({
            version: args.version
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('public/styles/*.scss', ['sass']);
    gulp.watch('public/index.html', ['htmlhint']);
    gulp.watch('public/app/**/*.js', ['jshint']);
});

gulp.task('build', ['sass', 'compress']);

gulp.task('default', ['htmlhint', 'jshint', 'watch']);