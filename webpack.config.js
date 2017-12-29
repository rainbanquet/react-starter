const webpack   = require('webpack');
const bower_dir = __dirname + '/bower_components';

const config = {
    entry: {
        boundle: [
            'babel-polyfill',
            'react-hot-loader/patch',
            __dirname+'/index.js',
        ],
    },
    output: {
        path      : __dirname+'/build',
        filename  : 'bundle.js',
    },
    devServer: {
        hotOnly   : true,
        host      : 'localhost',
        port      : 3500,
    },
    module: {
        rules: [
            {
                test   : /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use    : [
                    {
                        loader : 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    },
                    {
                        loader : 'eslint-loader',
                        options : {
                          // eslint options (if necessary)
                        }
                    }
                ]
            },
            {   
                test: /\.css$/,
                use :[
                    { loader: 'style-loader' }, 
                    { loader: 'css-loader'   },
                ],
            },
            {   
                test: /\.less$/,
                use :[
                    { loader: 'style-loader' }, 
                    { loader: 'css-loader'   },
                    { loader: 'less-loader'  },
                ],
            },
        ],
    },
    plugins: [ 
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name:'vendor', filename:'vendor.js'}),// 將entry裡的當案，根據切口打包命名
    ],
}

//====
//
//  將vendor切開，避免一直打包(未成功)
//
//====
const initVendor = function(){
    config.entry.vendor     = [];
    config.module.noParse   = [];
    config.resolve          = {
        alias: {},
    };
}
const addVendor = function( name, path ){
    config.resolve.alias[ name ] = path;                // 指定引用 bower 裡的 react 而不用 npm 裡的 react
    config.module.noParse.push( new RegExp(path) );     // 指定 webpack 不要處理 react 這個檔案 
    config.entry.vendor.push( name );                   // 將模組放入vendor
}
// initVendor();
// addVendor('react', bower_dir + '/react/react.production.min.js');

module.exports = config;