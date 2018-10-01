var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true,
    module: {
        // babel-loader will be used to compile every .js file to transpile ES6 and ES7
        // loaders: [
        //     {
        //         test: /\.js$/,
        //         exclude:/node_modules/,
        //         loader: 'babel-loader', //the link between Webpack and Babel
        //         query: {
        //             presets: ['react', 'es2015', 'stage-1']
        //         }
        //     }
        // ], 
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.s[a|c]ss$/,
                loader: 'sass-loader!style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
                // include: [
                //     path.resolve(__dirname, './src/static/img')
                //   ],
                loader: 'url-loader?limit=100000'
            }, 
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader', 
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'public')
    }
};