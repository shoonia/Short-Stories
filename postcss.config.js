module.exports = {
    plugins: [
        require('css-mqpacker')(),
        require('postcss-merge-rules')(),
        require('autoprefixer')({
            browsers: [
                '> 1%',
                'not ie <= 11'
            ]
        }),
        require('cssnano')({
            discardComments: {
                removeAll: true,
                removeAllButFirst: true
            }
        })
    ]
};
