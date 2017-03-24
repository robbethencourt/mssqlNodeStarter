const { resolve } = require('path')
const webpackValidator = require('webpack-validator')
const { getIfUtils } = require('webpack-config-utils')

module.exports = env => {
  const { ifProd, ifNotProd } = getIfUtils(env)

  // HMR for react. follow the link below
  // https://webpack.js.org/guides/hmr-react/

  const config = webpackValidator({
    context: resolve('src'),
    entry: './app.js',
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
      // pathInfo: ifNotProd()
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          exclude: '/node_modules/'
        },
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  })
  return config
}
