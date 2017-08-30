/**
 * Created by txl-pc on 2017/8/6.
 */
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let webpack = require('webpack')
let dist =path.resolve(__dirname,"dist")
module.exports = {
  entry: {
    main: './src/main.js',
    main1: './src/main1.js',
    page: './src/page.js',
    page1: './src/page1.js',
  },
  output:{
    path: dist,
    filename:'[name].js',
    publicPath: "/",
  },
  resolve: {
    extensions: ['.js','.json'],
    alias: {
      'jquery': 'jquery/src/jquery'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:[{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.css$/,
        // exclude: /(node_modules|bower_components)/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: false
              }
            }
          ]
        })
      },
      {
        test: /\.html/,
        exclude: /(node_modules|bower_components)/,
        use:[{
          loader: 'html-loader'
        }]
      }
    ]
  },
  devServer: {
    contentBase: dist,
    publicPath: "/",
    compress: true,
    port: 5000,
    disableHostCheck: true,
    proxy: {
      '/mock': {
        target: 'http://127.0.0.1:3090',
        changeOrigin: true,
        pathRewrite: {
          '^/mock': '/mock'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:"main",
      filename: 'main.html',
      template: path.resolve(__dirname, './index.html'),
      chunks: ['main', 'vendor'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      title:"main1",
      filename: 'main1.html',
      template: path.resolve(__dirname, './index1.html'),
      chunks: ['main1', 'vendor'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      title:"page",
      filename: 'page.html',
      template: path.resolve(__dirname, './page.html'),
      chunks: ['page', 'vendor'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      title:"page1",
      filename: 'page1.html',
      template: path.resolve(__dirname, './page1.html'),
      chunks: ['page1', 'vendor'],
      inject: true
    }),
    new ExtractTextPlugin("styles.css"),
    new OpenBrowserPlugin({url: 'http://localhost:5000/'}),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    })
  ]
}