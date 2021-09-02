const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/script.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',

        options: {
          plugins: ['@babel/plugin-syntax-dynamic-import'],

          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
              },
            ],
          ],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
      },
    },
  },
  devServer: {
    port: 8686,
    liveReload: true,
  },
}