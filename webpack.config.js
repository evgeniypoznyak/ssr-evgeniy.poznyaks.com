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
    entry: './src/browser/index.js',
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
    entry: './src/server/index.js',
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
