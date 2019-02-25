const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'bundle.js'
    },
    watch: true,
    devtool: 'source-map',
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: [/node_modules/, /public/],
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter'),
            emitWarning: true,
            emitError: true,
            failOnWarning: true,
            failOnError: true
          }
        },
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/, /public/],
          use: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './public',
      hot: true
    }
  };