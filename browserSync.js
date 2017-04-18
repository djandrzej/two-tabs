/*eslint-disable import/unambiguous, import/no-nodejs-modules*/
const browserSync = require('browser-sync');
const fs = require('fs');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');

const bundler = webpack(webpackConfig);

browserSync({
    serveStatic: [{
        route: '/assets',
        dir: 'assets'
    }],
    server: {
        baseDir: webpackConfig.output.path,
        middleware: [
            webpackDevMiddleware(bundler, {
                publicPath: '/',
                contentBase: '/',
                inline: true,
                hot: true
            }),
            webpackHotMiddleware(bundler)
        ]
    }
});
