const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    // plugins: [
    //     // ...
    //     // применять изменения только при горячей перезагрузке
    //     new webpack.HotModuleReplacementPlugin(),
    // ],

    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
            title: 'Ciklum',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
        // new HtmlWebpackPlugin({
        //     title: 'Ciklum',
        //     template: path.resolve(__dirname, './src/createEvent/createEvent.html'),
        //     filename: 'createEvent.html',
        // }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            ],
    }
}