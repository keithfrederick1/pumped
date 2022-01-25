const path = require('path');
const srcDir = path.resolve(__dirname, 'client', 'src');
const distDir = path.resolve(__dirname, 'client', 'dist');

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'eval',
  stats: {
    excludeModules: /node_modules/,
  },
  entry: path.resolve(srcDir, 'index.jsx'),
  output: {
    path: distDir,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
