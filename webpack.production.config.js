var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, 'static');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

const ver = 1;

module.exports = {
    entry :  {
        bundle : './src/index.js',
        vendor :['react','lodash','react-dom']
    },
    output: {
        chunkFilename: '[name].js?'+ver,
        filename: '[name].js', //
        path: assetsPath
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['babel'],
                include: [path.resolve(__dirname, "app")]
           }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style','css?modules!postcss!sass')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool : 'eval',
    
    plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js'),
    new ExtractTextPlugin("style.css?"+ver),
    new CopyWebpackPlugin([{from:'assets'}]),
    new webpack.optimize.UglifyJsPlugin()
  ]

};