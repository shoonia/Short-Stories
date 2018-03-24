const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
    mode: IS_PRODUCTION ? 'production' : 'development',
    entry: [
        './index.js',
        './index.scss'
    ],
    output: {
        path: PATH.public,
        publicPath: '/',
        filename: 'bundle.[name].js',
        chunkFilename: 'chunk.[id].js'
    },
    plugins: [
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
                    use: [ 'css-loader', 'sass-loader' ]
                })
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    ecma: 7,
                    warnings: false,
                    output: {
                        comments: false
                    },
                    compress: {
                        unsafe: true,
                        unsafe_comps: true,
                        pure_getters: true,
                        hoist_funs: true,
                        drop_console: true
                    }
                }
            })
        ]
    }
};

if (IS_PRODUCTION) {
    const PurgeCSSPlugin = require('purgecss-webpack-plugin');
    const globAll = require('glob-all');

    CONFIG.plugins.push(
        new PurgeCSSPlugin({
            paths: globAll.sync([
                path.resolve( PATH.src, './index.html' ),
                path.resolve( PATH.src, './components/**/*.jsx' )
            ])
        })
    );
}

module.exports = CONFIG;
