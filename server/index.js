const express = require('express');
const morgan = require('morgan');
const path = require('path');

const config = require('./config');

let app = express();

if (config.env === 'development') {

    // Webpack middleware
    const webpack = require('webpack');
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../webpack.config');
    const compiler = webpack(webpackConfig);

    app.use(webpackMiddleware(compiler, {
        hot: true,
        publicPath: '/bundles/',
        noInfo: true
    }));
    app.use(webpackHotMiddleware(compiler));

    // Logger
    app.use(morgan('dev'));
    console.log(`Running dev server on port ${config.port}`);
} else {
    // Serve static files
    app.use(express.static(path.join(__dirname, '../client', 'dist')));
}

app.use('*', (req,res) => {
    if (config.env === 'development') {
        // HTML without style tag
        res.sendFile(path.join(__dirname, 'views', 'dev.html'));
    } else {
        // HTML with style tag
        res.sendFile(path.join(__dirname, 'views', 'prod.html'));
    }
});


app.listen(config.port);
