'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import bump from 'gulp-bump';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import ts from 'gulp-typescript';
import tslint from 'gulp-tslint';
import yargs from 'yargs';

const args = yargs.argv;
const tsProject = ts.createProject('tsconfig.json');

gulp.task('sass', () => {
  return gulp.src('src/client/styles/master.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('src/client/styles'));
});

gulp.task('tslint', () => {
  return gulp.src(['src/client/app/**/*.ts'])
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

gulp.task('ts', ['tslint'], () => {
  var sourceTsFiles = [
    'typings/index.d.ts',
    'src/client/app/app.module.ts',
    'src/client/app/app.route.ts',
    'src/client/app/core/core.module.ts',
    'src/client/app/core/config.ts',
    'src/client/app/core/data.service.ts',
    'src/client/app/core/time.service.ts',
    'src/client/app/dashboard/dashboard.module.ts',
    'src/client/app/dashboard/dashboard.component.ts',
    'src/client/app/dashboard/dashboard.interface.ts',
    'src/client/app/dashboard/dashboard.controller.ts',
    'src/client/app/reading/reading.module.ts',
    'src/client/app/reading/reading.component.ts',
    'src/client/app/reading/reading.interface.ts',
    'src/client/app/reading/reading.controller.ts'
  ];
  var tsResult = gulp.src(sourceTsFiles)
    .pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('src/client/app'));
});

gulp.task('bundle', ['ts'], () => {
  browserify({
      entries: [
        'node_modules/angular/angular.js',
        'node_modules/angular-strap/dist/angular-strap.js',
        'node_modules/angular-strap/dist/angular-strap.tpl.js',
        'node_modules/angular-resource/angular-resource.js',
        'node_modules/angular-route/angular-route.js',
        'src/client/app/output.js'
      ]
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('src/client/app'));
});

gulp.task('bump', () => {
  return gulp.src(['./bower.json', './package.json'])
    .pipe(bump({
      version: args.version
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
  gulp.watch('src/client/styles/*.scss', ['sass']);
  gulp.watch('src/client/app/**/*.ts', ['tslint']);
});

gulp.task('build', ['sass', 'bundle']);
gulp.task('default', ['build', 'watch']);