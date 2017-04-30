var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'renderer'),
    filename: 'bundle.js'
  },
  target: "electron-main",
  module: {
    rules: [
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
  plugins: [new HtmlWebpackPlugin({
    filename: path.join(__dirname, 'renderer', 'index.html'),
    template: '!!pug-loader!index.pug',
    inject: 'head'
  })]
}
