const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATH = {
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public')
};

const CONFIG = {
    context: PATH.src,
    entry: [
        './index.js',
        './index.css'
    ],
    output: {
        path: PATH.public,
        publicPath: '/',
        filename: 'bundle.[name].js',
        chunkFilename: 'bundle.[name].[id].js'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            async: true,
            children: true,
            minChunks: 2
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new HTMLPlugin({
            filename: 'index.html',
            template: './index.html',
            favicon: './images/favicon.ico'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: PATH.src,
                exclude: /node_modules/,
                use: 'babel-loader'
            }, {
                test: /.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    }
};

module.exports = CONFIG;
