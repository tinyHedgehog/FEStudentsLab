const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'bundle.js',
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
          failOnError: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /public/],
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './public',
    hot: true,
  },
};
