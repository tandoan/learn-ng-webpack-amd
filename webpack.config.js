'use strict';
var webpack = require('webpack'),
    path = require('path');
// PATHS
var PATHS = {
    app: __dirname + '/app',
    bower: __dirname + '/app/bower_components'
};
module.exports = {
    context: PATHS.app,
    entry: {
        app: ['webpack/hot/dev-server', './index.js']
    },
    output: {
        path: PATHS.app,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html/,
                loader: 'html-loader'
            },

            // Style Loaders
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    }
}