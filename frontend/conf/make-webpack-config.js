let fs = require('fs')
let path = require('path')
let webpack = require('webpack')
let autoprefixer = require('autoprefixer')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')

function extractForProduction(loaders) {
  return ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')))
}

module.exports = function(options) {
  options.lint = fs.existsSync(path.resolve(__dirname, '..', '.eslintrc')) && options.lint !== false

  let localIdentName = options.production ? '[hash:base64]' : '[path]-[local]-[hash:base64:5]'
  let cssLoaders = 'style!css?module&localIdentName=' + localIdentName + '!postcss?browsers=last 2 versions'

  if (options.production) {
    cssLoaders = extractForProduction(cssLoaders)
  }

  return {
    entry: options.production ? './index.js' : [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './index.js',
    ],
    debug: !options.production,
    devtool: options.devtool,
    output: {
      path: options.production ? './dist' : './build',
      publicPath: options.production ? '' : 'http://localhost:8080/',
      filename: options.production ? 'index_bundle.[hash].js' : 'index_bundle.js',
    },
    module: {
      preLoaders: options.lint ? [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint',
        },
      ] : [],
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel'],
        },
        {
          test: /\.css$/,
          loader: cssLoaders,
        },
        {
          test: /\.png$/,
          loader: 'url?limit=100000&mimetype=image/png',
        },
        {
          test: /\.svg$/,
          loader: 'url?limit=100000&mimetype=image/svg+xml',
        },
        {
          test: /\.gif$/,
          loader: 'url?limit=100000&mimetype=image/gif',
        },
        {
          test: /\.jpg$/,
          loader: 'file',
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.css'],
    },
    plugins: options.production ? [
      // Important to keep React file size down
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
      new ExtractTextPlugin('app.[hash].css'),
      new HtmlWebpackPlugin({
        template: './index.html',
        production: true,
      }),
    ] : [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
    postcss: [autoprefixer],
    externals: {
      'cheerio': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
  }
}
