const webpack = require('webpack');
const webpackConfigProd = require('./webpack.production');

function defaultTask(cb) {
  cb();
}

function build() {
  return new Promise((resolve, reject) => {
    webpack(
      webpackConfigProd,
      // eslint-disable-next-line consistent-return
      (err, stats) => {
        if (err) {
          return reject(err);
        }

        if (stats.hasErrors()) {
          return reject(
            new Error(
              stats.compilation.errors.join('\n'),
            ),
          );
        }
        resolve();
      },
    );
  });
}

exports.build = build;
exports.default = defaultTask;
