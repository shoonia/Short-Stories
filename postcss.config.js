module.exports = {
    plugins: [
        require('css-mqpacker')(),
        require('postcss-merge-rules')(),
        require('autoprefixer')({
            browsers: [
                '> 2%',
                'not ie <= 10'
            ]
        })
    ]
};
