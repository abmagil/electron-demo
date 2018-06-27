var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'app', 'index.js'),
    // styleguide: path.join(__dirname, 'src', 'styleguide', 'main.js'),
  },
  output: {
    path: path.join(__dirname, 'renderer'),
    filename: '[name].js',
  },
  target: 'electron-main',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' },
        ],
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.scss/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader', options: {
              // root: path.resolve(__dirname, 'src'),
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader', options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {loader: 'babel-loader'},
          {
            loader: 'react-svg-loader',
            query: {
              svgo: {
                pretty: true,
                plugins: [{ removeStyleElement: true }],
              },
            },
          },
        ],
      },
    ],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'renderer', 'index.html'),
      chunks: ['app'],
      template: '!!pug-loader!index.pug',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'renderer', 'styleguide.html'),
      chunks: ['styleguide'],
      template: '!!pug-loader!styleguide.pug',
      inject: 'body',
    }),
  ],
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'src', 'app'),
    },
    modules: [
      path.resolve('node_modules'),
    ],
  },
};
