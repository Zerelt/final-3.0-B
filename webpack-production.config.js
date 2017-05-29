var path = require('path');
var webpack = require('webpack');
//for production;
//use with cli command:  webpack --config webpack-production.config.js -p

module.exports = {
    devtool: 'cheap-source-map',
    entry: ['./src/js/App.jsx'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: './build/'//static
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: /src/,
                loaders: ['style', 'css', 'sass?outputStyle=expanded']
            }, {
                test: /\.jsx?$/,
                exclude: /(node-modules)/,
                loaders: [
                    'react-hot-loader/webpack', 'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
                ],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                // loaders: ['url?limit=8192', 'img']
                include:/src/,
                exclude:/(node-modules)/,
                loader:'file-loader?name=[name].[ext]&outputPath=../build/images/'
            }, {
                test: /\.(eot|ttf|woff|woff2)$/i,
                loader:'url-loader',
                // loader:'file-loader?name=[name].[ext]&outputPath=../fonts/'
            }
        ]
    }
};
