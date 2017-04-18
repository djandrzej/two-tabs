/*eslint-disable import/unambiguous, import/no-nodejs-modules*/
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

const BUILD_PATH = './build/';

const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    }),
    new CleanWebpackPlugin(BUILD_PATH),
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new ExtractTextPlugin('styles-[hash].css'),
    new StyleExtHtmlWebpackPlugin()
];

if (PRODUCTION) {
    plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin({
            moveToParents: true
        })
    );
} else {
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );
}

module.exports = {
    entry: PRODUCTION ? {
        vendor: ['babel-polyfill', 'react'],
        app: ['./src/app.js']
    } : [
        'babel-polyfill',
        'webpack/hot/only-dev-server',
        'webpack-hot-middleware/client',
        './src/app.js'
    ],
    output: {
        path: path.resolve(BUILD_PATH),
        publicPath: '/',
        filename: '[name]-[hash].js'
    },
    devtool: PRODUCTION ? undefined : 'inline-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: PRODUCTION ? [
                'babel-loader',
            ] : [
                'babel-loader',
                'webpack-module-hot-accept'
            ],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            loaders: PRODUCTION
                ? ['style-loader', 'css-loader?minimize', 'postcss-loader', 'less-loader']
                : ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'less-loader?sourceMap'],
            exclude: [/node_modules/, /styles\/main\.less$/]
        }, {
            test: /styles\/main\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: PRODUCTION
                    ? 'css-loader?minimize!postcss-loader!less-loader'
                    : 'css-loader?sourceMap!postcss-loader!less-loader?sourceMap'
            }),
            exclude: /node_modules/
        }]
    },
    plugins
};
