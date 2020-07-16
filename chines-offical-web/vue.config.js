'use strict'
module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ?
    //     './' : '/guanwang-web/',
    outputDir: process.env.NODE_ENV === 'production' ?
        'dist' : 'guanwang-web',
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production' ?
        '/' : '/guanwang-web',
}