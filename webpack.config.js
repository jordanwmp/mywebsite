const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        //filename: 'bundle.js',
        filename: '[name].[contenthash].js',
        clean: true
    },
    mode: 'production',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 8000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    //'style-loader', 
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                // use: ['file-loader'],
               type: 'asset/resource'
            },
            {
                test: /\.sass$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Jordan Willian'
        })
    ]
}