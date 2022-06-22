/* eslint-disable camelcase */
const gulp = require('gulp');
const gulpclean = require('gulp-clean');
const webpack = require('webpack');
const webpackConfigProd = require('./webpack.production');
const webpackConfigDev = require('./webpack.development');

function defaultTask(cb) {
  cb();
}

function template_webpackBuild(config) {
  return new Promise((resolve, reject) => {
    webpack(
      config,
      // eslint-disable-next-line consistent-return
      (err, stats) => {
        if (err) {
          return reject(err);
        }

        if (stats.hasErrors()) {
          return reject(new Error(stats.compilation.errors.join('\n')));
        }
        resolve();
      },
    );
  });
}

function build() {
  return template_webpackBuild(webpackConfigProd);
}

function build_dev() {
  return template_webpackBuild(webpackConfigDev);
}

function clean() {
  return gulp
    .src('dist/**/*', { read: true })
    .pipe(gulpclean());
}

exports.build = build;
exports.build_dev = build_dev;
exports.default = defaultTask;
exports.clean = clean;
