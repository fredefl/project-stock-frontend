/* eslint-disable no-undef, no-console */
import bg from 'gulp-bg';
import del from 'del';
import eslint from 'gulp-eslint';
import fs from 'fs';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import mochaRunCreator from './test/mochaRunCreator';
import os from 'os';
import path from 'path';
import runSequence from 'run-sequence';
import shell from 'gulp-shell';
import webpackBuild from './webpack/build';
import yargs from 'yargs';

const args = yargs
  .alias('p', 'production')
  .argv;

// To fix some eslint issues: gulp eslint --fix
const runEslint = () => {
  const isFixed = file => args.fix && file.eslint && file.eslint.fixed;
  return gulp.src([
    'gulpfile.babel.js',
    'src/**/*.js',
    'webpack/*.js'
  ], { base: './' })
    .pipe(eslint({ fix: args.fix }))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('./')));
};

gulp.task('env', () => {
  process.env.NODE_ENV = args.production ? 'production' : 'development';
});

gulp.task('clean', () => del('build/*'));

gulp.task('build-webpack', ['env'], webpackBuild);
gulp.task('build', ['build-webpack']);

gulp.task('eslint', () => runEslint());

// Exit process with an error code (1) on lint error for CI build.
gulp.task('eslint-ci', () => runEslint().pipe(eslint.failAfterError()));

gulp.task('mocha', () => {
  mochaRunCreator('process')();
});

// Enable to run single test file
// ex. gulp mocha-file --file src/browser/components/__test__/Button.js
gulp.task('mocha-file', () => {
  mochaRunCreator('process')({ path: path.join(__dirname, args.file) });
});

// Continuous test running
gulp.task('mocha-watch', () => {
  gulp.watch(
    ['src/browser/**', 'src/common/**', 'src/server/**'],
    mochaRunCreator('log')
  );
});

gulp.task('test', done => {
  runSequence('eslint-ci', 'mocha', 'build-webpack', done);
});

gulp.task('server-node', bg('node', './src/server'));
gulp.task('server-hot', bg('node', './webpack/server'));
// Shell fixes Windows este/issues/522, bg is still needed for server-hot.
gulp.task('server-nodemon', shell.task(
  // Normalize makes path cross platform.
  path.normalize('node_modules/.bin/nodemon --ignore webpack-assets.json src/server')
));

gulp.task('server', ['env'], done => {
  if (args.production) {
    runSequence('clean', 'build', 'server-node', done);
  } else {
    runSequence('server-hot', 'server-nodemon', done);
  }
});

// Default task to start development. Just type gulp.
gulp.task('default', ['server']);