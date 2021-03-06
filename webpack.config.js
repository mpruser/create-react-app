const { merge: webpackMerge } = require('webpack-merge');
const webpackConfigCore = require('./webpack/webpack.config.core.js');
const webpackConfigDev = require('./webpack/webpack.config.dev.js');
const webpackConfigProd = require('./webpack/webpack.config.prod.js');

/** 현재 개발 환경이 빌드모드인가? */
const isEnvProduction = process.env.NODE_ENV === 'production';

module.exports = webpackMerge(
  webpackConfigCore,
  isEnvProduction ? webpackConfigProd : webpackConfigDev,
);
