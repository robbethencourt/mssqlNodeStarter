const { resolve } = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')

module.exports = env => {
  const { ifProd, ifNotProd } = getIfUtils(env)

  console.log(env)
  console.log(ifNotProd())

  // HMR for react. follow the link below
  // https://webpack.js.org/guides/hmr-react/

  const config = {
    context: resolve('src'),
    entry: {
      app: './app.js',
      vendor: ['react']
    },
    output: {
      filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'),
      path: resolve('dist'),
      pathinfo: ifNotProd()
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      loaders: [
        { test: /\.jsx?$/, loaders: ['babel-loader?compact=false'], exclude: '/node_modules/' },
        { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
      ]
    },
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      ifProd(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })),
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body'
      })
    ])
  }
  return config
}
