var webpack = require("webpack");
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './index.js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    },
    modules: [
      'node_modules',
    ]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      { test: /\.vue/, loader: 'vue-loader' },
      {
        // 対象となるファイルの拡張子
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      },
    ]
  },
  // // そんなにいらん
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'Vue',
  //     filename: 'vue.js',
  //     minChunk: Infinity,
  //   })
  // ]
}
