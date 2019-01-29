const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

const webpackConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../example/app.js'),
  output: {
    path: path.join(__dirname, '../example/dist/'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: ''
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      vue: path.resolve(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}

if (process.env.NODE_ENV !== 'production') {
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'example/index.html',
    inject: true
  }))

  const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
  webpackConfig.plugins.push(new FriendlyErrorsPlugin())
}

module.exports = webpackConfig
