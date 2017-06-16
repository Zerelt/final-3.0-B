const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app:'./src/components/App.jsx'
  },

  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js',
    // publicPath:'./'
  },

  devtool:'cheap-source-map',

  module: {
    rules: [
      {
        test:/\.scss$/,
        // exclude:/node_modules/,
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader','sass-loader'],
          publicPath:'/dist/'
        })
      },
      {
        test:/\.jsx$/,
        exclude:/node_modules/,
        use:['babel-loader']
      },
      {
        test:/\.(jpe?g|png|svg|gif)$/i,
        exclude:/node_modules/,
        use:[
          'file-loader?name=[name].[ext]&outputPath=images/&publicPath=./',
          //specify publicPath for production mode: with this folder structure publicPath needs to be ./
          //if it's just publicPath=/ then the path for images becomes: file:///images/[name].[ext]
          //with the ./ the path for images is: ProjectRootFolder/dist/images/[name].[ext]
          //same for the font files
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(ttf|woff|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]&publicPath=./'
        //specify publicPath for production mode: with htis folder structure publicPath needs to be ./
      }
    ]
  },//end module

  devServer:{
    contentBase:path.join(__dirname,'dist'),
    // publicPath:'./',
    compress:true,
    // port:8080,
    // stats: 'errors-only',
    hot: false,
    // hotOnly: true
    // open:true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title:'Copy of Filters for Iphone',
      minify: {
        collapseWhitespace:true
      },
      hash: true,
      // filename:'./../index.html',
      // excludeChunks:['contact'],
      template: './src/index.html',
      // favicon: 'path/to/favicon.png'
    }),
    new ExtractTextPlugin({
      filename:'app.css',
      disable:false,
      allChunks:true
    })
  ]//end plugins
};
