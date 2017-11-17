const webpack = require('webpack');

const config = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        __dirname+'/index.js',
    ],
    output: {
        path      : __dirname+'/build',
        filename  : 'bundle.js',
    },
    devServer: {
        hotOnly: true,
        port   : 3500,
        // historyApiFallback: {
        //     index: __dirname+'/build/index.html'
        // },
        // historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }
            }
        ]
    },
    plugins: [ 
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
}
module.exports = config;