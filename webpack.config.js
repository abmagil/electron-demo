var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src', 'app.js'),
    styleguide: path.join(__dirname, 'src', 'styleguide', 'main.js'),
  },
  output: {
    path: path.join(__dirname, 'renderer'),
    filename: '[name].js'
  },
  target: "electron-main",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'eslint-loader',
        },
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        query: {
          presets: ["react"]
        }
      },
      {
        test: /\.scss/,
        use: [
          { loader: "style-loader"},
          { loader: "css-loader"},
          { loader: "sass-loader"}
        ]
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'renderer', 'index.html'),
      chunks: ['bundle'],
      template: '!!pug-loader!index.pug',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'renderer', 'styleguide.html'),
      chunks: ['styleguide'],
      template: '!!pug-loader!styleguide.pug',
      inject: 'body'
    }),
  ],
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
}
