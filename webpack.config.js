// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'production',
  // エントリーポイントの設定
  entry: './resource/js/index.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'index.bundle.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'docs/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  }
};