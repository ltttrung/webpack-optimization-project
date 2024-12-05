// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // The entry point of the application
  output: {
    filename: '[name].[contenthash].js',  // Output file name pattern
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  mode: 'production',  // Set to production for optimizations
  module: {
    rules: [
      {
        test: /\.js$/,  // JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],  // Using Babel to transpile JavaScript
          },
        },
      },
      {
        test: /\.css$/,  // CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,  // Image files
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[hash].[ext]', outputPath: 'images/' },
          },
          {
            loader: 'image-webpack-loader',
            options: { disable: true }, // Disable for development
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',  // Enable code splitting
    },
    minimize: true,
    minimizer: [new TerserPlugin()],  // Minify the JavaScript
  },
  plugins: [
    new CleanWebpackPlugin(),  // Clean the dist folder before each build
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Use the index.html as a template
    }),
  ],
};
