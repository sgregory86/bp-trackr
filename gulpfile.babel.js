'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import ts from 'gulp-typescript';
import tslint from 'gulp-tslint';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import fs from 'file-system';
import yaml from 'js-yaml';

const config = yaml.safeLoad(fs.readFileSync('gulpfile.config.yml', 'utf8'));
const tsProject = ts.createProject('tsconfig.json');

gulp.task('sass', () => {
  return gulp.src('src/client/styles/style.scss')
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
  let tsResult = gulp.src(config.tsFiles)
    .pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('src/client/app'));
});

gulp.task('bundle', ['ts'], () => {
  browserify({
      entries: config.bundleFiles
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('src/client/app'));
});

gulp.task('watch', () => {
  gulp.watch('src/client/styles/*.scss', ['sass']);
  gulp.watch('src/client/app/**/*.ts', ['tslint']);
});

gulp.task('build', ['sass', 'bundle']);
gulp.task('default', ['build', 'watch']);