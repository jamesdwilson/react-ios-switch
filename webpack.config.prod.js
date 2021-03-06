var autoprefixer = require('autoprefixer')
var commonConfig = require('./webpack.config.common')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './lib/Switch',
  output: {
    library: commonConfig.library,
    libraryTarget: 'umd',
    filename: 'index.js',
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'lib')
        ],
        loaders: ['babel', 'eslint']
      },
      {
        test: /\.scss$/,
        include: [
          path.join(__dirname, 'lib')
        ],
        loader: ExtractTextPlugin.extract('style', [`css?localIdentName=${commonConfig.library}-[name]-[local]`, 'postcss', 'sass'].join('!'))
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css')
  ],
  postcss: [autoprefixer]
}
