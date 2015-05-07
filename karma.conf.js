// Karma configuration

var webpack = require("webpack");

var configSettings = {
    "normal": {},
    // "uglified": {
    //     plugins: [
    //         new webpack.optimize.UglifyJsPlugin()
    //     ]
    // }
};


module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            {pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', included: true},
            {pattern: 'node_modules/angular/angular.js', included: false},
            {pattern: 'node_modules/angular-mocks/angular-mocks.js', included: false},
            {pattern: 'node_modules/angular-route/angular-route.js', included: false},
            {pattern: 'app/index.js', included: true},
            {pattern: 'app/tests.js', included: true},
            'app/components/**/*.spec.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/components/**/*.html': ['webpack', 'ng-html2js'],
            'app/index.js': ['webpack'],
            'app/tests.js': ['webpack'],
            'app/components/**/*.js': ['webpack']
        },


        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/',
            moduleName: 'allTemplates'
        },

        webpackMiddleware: {
            stats: {
                colors: true
            },
            noInfo: false
        },
        webpack: Object.keys(configSettings).map(function (name) {
            var config = {
                name: name,
                resolve: {
                    extensions: ["", ".js", ".html", ".css"]
                },
                module: {
                    loaders: [
                        {test: /\.html$/, loader: "html-loader"},
                        {test: /\.css$/, loader: 'style-loader!css-loader'}
                    ]
                }
            };
            Object.keys(configSettings[name]).forEach(function (key) {
                config[key] = configSettings[name][key]
            });
            return config;
        }),


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS', 'Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        plugins: [
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher')
        ]
    });
};
