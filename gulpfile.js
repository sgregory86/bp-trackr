'use strict';

var gulp = require('gulp'),
    args = require('yargs').argv,
    browserify = require('browserify'),
    plug = require('gulp-load-plugins')(),
    source = require('vinyl-source-stream'),
    ts = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    tsProject = ts.createProject('tsconfig.json');

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

gulp.task('tslint', function() {
    return gulp.src(['src/client/app/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('ts', ['tslint'], function() {
    var sourceTsFiles = [
        'typings/tsd.d.ts',
        'src/client/app/app.module.ts',
        'src/client/app/app.route.ts',
        'src/client/app/core/core.module.ts',
        'src/client/app/core/config.ts',
        'src/client/app/core/dataservice.ts',
        'src/client/app/dashboard/dashboard.module.ts',
        'src/client/app/dashboard/dashboard.controller.ts',
        'src/client/app/add/add.module.ts',
        'src/client/app/add/add.controller.ts',
        'src/client/app/shared/filters/reverse.ts'
    ];
    var tsResult = gulp.src(sourceTsFiles)
        .pipe(ts(tsProject));
	return tsResult.js.pipe(gulp.dest('src/client/app'));
});

gulp.task('bundle', ['ts'], function() {
    browserify({
            entries: [
                'bower_components/angular/angular.js',
                'bower_components/angular-strap/dist/angular-strap.js',
                'bower_components/angular-strap/dist/angular-strap.tpl.js',
                'bower_components/angular-messages/angular-messages.js',
                'bower_components/angular-resource/angular-resource.js',
                'bower_components/angular-route/angular-route.js',
                'src/client/app/output.js'
            ]
        })
        .bundle()
        .pipe(source('bundle.js'))
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
    gulp.watch('src/client/app/**/*.ts', ['tslint']);
});

gulp.task('build', ['sass', 'bundle']);

gulp.task('default', ['htmlhint', 'build', 'watch']);