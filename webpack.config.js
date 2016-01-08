var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
const ver = 1;


module.exports = {
    entry :  {
        bundle : [  'webpack/hot/dev-server',
                    'webpack-hot-middleware/client',
                    './src/index.js'],
        vendor :['react','react-dom']
    },
    output: {
        filename: '[name].js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        path: path.join(__dirname, "dist/js/"),
        publicPath: 'http://localhost:3030/assets/'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['react-hot','babel'],
                include: [path.resolve(__dirname, "src")]
            }, {
                test: /\.scss$/,
                include: [path.resolve(__dirname, "src")],
                loader: ExtractTextPlugin.extract('style','css?modules!autoprefixer!sass')

            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool : 'eval',
    plugins: [
     new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js'),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css?"+ver),
    new CopyWebpackPlugin([{from:'assets'}])
  ]

}