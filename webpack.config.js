const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniExtractCssPlugin = require('mini-css-extract-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const webpack = require('webpack');
require('dotenv').config({ path: './.env' }); 

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@componentStyles': path.resolve(__dirname, 'src/styles/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniExtractCssPlugin({
            filename: '[name].css'
        }),
        new DotenvWebpackPlugin(),
        
        new webpack.DefinePlugin({
            'process.env': {
                CLIENT_ID_PAYPAL: JSON.stringify(process.env.CLIENT_ID_PAYPAL),
                GOOGLE_MAPS_ID: JSON.stringify(process.env.GOOGLE_MAPS_ID)
            }
          })   
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3005,
        open: true,
        historyApiFallback: true
    }
}




