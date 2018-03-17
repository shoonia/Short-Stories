const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_PRODUCTION = NODE_ENV === 'production';

const PATH = {
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public')
};

const CONFIG = {
    context: PATH.src,
    watch: !IS_PRODUCTION,
    devtool: IS_PRODUCTION ? false : 'source-map',
    entry: [
        './index.js',
        './index.css'
    ],
    output: {
        path: PATH.public,
        publicPath: '/',
        filename: 'bundle.[name].js',
        chunkFilename: 'bundle.[name].js'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            async: true,
            children: true,
            minChunks: 2
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new HTMLPlugin({
            filename: 'index.html',
            template: './index.html',
            favicon: './images/favicon.ico',
            minify: {
                html5: true,
                removeComments: IS_PRODUCTION,
                collapseWhitespace: IS_PRODUCTION
            }
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

if (IS_PRODUCTION) {
    CONFIG.plugins.push(
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }),
        // CSS:
        new (require('optimize-css-assets-webpack-plugin'))({
            cssProcessorOptions: {
                discardComments: { removeAll: true }
            }
        }),
        new (require('purgecss-webpack-plugin'))({
            paths: (require('glob-all')).sync([
                path.resolve( PATH.src, './index.html' ),
                path.resolve( PATH.src, './components/**/*.jsx' )
            ])
        })
    );
}

module.exports = CONFIG;
