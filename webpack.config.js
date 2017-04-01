var webpack = require('webpack');
module.exports = {
  entry : './src/main.js', // 页面入口文件
  output : { // 通过webpack打包生成的目标文件放的位置
    path : '/build',
    filename : '[name].js',
  },
  module : {
    loaders : [
      {test : /\.css$/, loader : 'style-loader!css-loader'},
      {test : /\.js$/, loader : 'jsx-loader'},
      {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
      }
    ]
  },
  resolve : {
    extensions : ['.js', '.jsx']
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin()
  ]
};
