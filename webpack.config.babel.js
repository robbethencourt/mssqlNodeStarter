const { resolve } = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifeestWebpackPlugin = require('inline-manifest-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')

module.exports = env => {
  const { ifProd, ifNotProd } = getIfUtils(env)

  console.log(env)

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
        {
          test: /\.jsx?$/,
          loaders: ['babel-loader?compact=false'],
          include: resolve('src')
        },
        {
          test: /\.scss$/,
          loader: ExtractTextWebpackPlugin.extract({ fallback: 'style-loader', loader: 'css-loader!sass-loader' })
        },
        {
          test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
          loader: 'file-loader?name=[name].[ext]'
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      host: 'localhost',
      proxy: {
        '/api/*': {
          target: 'http://localhost:3000',
          secure: false
        }
      }
    },
    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    },
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new ExtractTextWebpackPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css')),
      ifProd(new InlineManifeestWebpackPlugin()),
      ifProd(new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest']
      })),
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ])
  }
  return config
}
