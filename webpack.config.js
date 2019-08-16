const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const common = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['isomorphic-style-loader', {loaders: ['style-loader', 'css-loader']}],
            },
            // {
            //     test: /\.css$/,
            //     include: /node_modules/,
            //     loaders: ['style-loader', 'css-loader'],
            // },
        ],

    },

    resolve: {
        alias: {
            '@material-ui/core': '@material-ui/core/es',
        },
    },
};

const browserConfig = {
    ...common,
    entry: ['@babel/polyfill', './src/browser/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: 'true',
        }),
    ],
};

const serverConfig = {
    ...common,
    entry: ['@babel/polyfill', './src/server/index.js'],
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: 'server.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: 'false',
        }),
    ],
};

module.exports = [browserConfig, serverConfig];
