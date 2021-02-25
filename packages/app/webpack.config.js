const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, argv) {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'eval',

    devServer: {
      open: true,
      historyApiFallback: true
    },

    entry: {
      index: './build/index.js',
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ]
  }
};