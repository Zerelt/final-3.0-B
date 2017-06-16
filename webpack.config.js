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
    // publicPath:'http://localhost:8080/',
    filename: '[name].bundle.js',
  },

  devtool:'inline-source-map',

  module: {
    rules: [
      {
        test:/\.scss$/,
        // exclude:/node_modules/, //don't exlude this for this project; needed to import waves.scss in App.jsx
        use: ['style-loader','css-loader','sass-loader']
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
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(ttf|woff|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]&publicPath=./'
      }
    ]
  },//end module

  devServer:{
    contentBase:path.join(__dirname,'dist'),
    // publicPath:'/dist/',
    // publicPath: 'http://localhost:8080/dist',
    compress:true,
    // port:8080,
    inline:true,
    // stats: 'errors-only',
    hot: true,
    // hotOnly: true
    // open:true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title:'Alexander',
      minify: {
        // collapseWhitespace:true
      },
      hash: true,
      // filename:'./../index.html',
      // excludeChunks:['contact'],
      template: './src/index.html',
      // favicon: 'path/to/favicon.png'
    }),
    new ExtractTextPlugin({
      filename:'app.css',
      disable:true,
      allChunks:true
    }),
    new webpack.HotModuleReplacementPlugin({
      // isProd:false //specify is development environment is development or production
    }),
    new webpack.NamedModulesPlugin(),
  ]//end plugins
};
