var path = require('path');
var webpack = require('webpack');
//start with webpack-dev-server --hot to use HMR
module.exports = {
    // entry:{
    //   app: path.resolve(__dirname, 'src')+ '/js/App.jsx',
    // },
    entry: getEntrySources(['./src/js/App.jsx']),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'http://localhost:8080/build',//http://localhost:8080
        // publicPath: 'http://192.168.1.102:8080/build',
        filename: 'bundle.js'
    },
    devtool: 'eval',
    devServer: {
        //contentBase: __dirname + '/public',
        inline: true,
        port : 8080
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                include: /src/,
                loaders: ['style', 'css','sass?outputStyle=expanded']
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['react-hot-loader/webpack', 'babel?presets[]=stage-0,presets[]=react,presets[]=es2015']
            }, {
              test: /\.(jpg|png|gif|svg|svgz)$/,
              include: /src/,
              exclude:/(node_modules)/,
              loader: 'file-loader',
              query: {
                  name: './build/images/[name].[ext]',
              }
            }, {
                test: /\.(ttf|woff)$/,
                include:/src/,
                exclude:/(node_modules)/,
                loader:'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // other plugins
    ]
};

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }
    return sources;
}
