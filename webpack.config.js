const webpack = require('webpack')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const outputPath = require('path').resolve(__dirname, "public")
const entryPoint = './src/app.js'
const appTitle = '3 Dark Towers'

module.exports = {
    entry: {
        index: ['babel-polyfill', entryPoint]
    },
    output: {
        path: outputPath,
        filename: './scripts/[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                    plugins: ['transform-object-rest-spread', 'transform-class-properties']
                }
            }
        }, {
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: { url: false }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')({
                            'browsers': ['> 1%', 'last 2 versions']
                        })],
                    }
                },
                { loader: "sass-loader" }
            ]
        }, {
            test: /\.(jpg|png|svg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: './assets/images/[name].[ext]'
                    }
                },
                {
                    loader: 'image-webpack-loader'
                }
            ]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            title: appTitle,
            favicon: "./src/assets/favicon.png"
        }),
        new MiniCssExtractPlugin({
            filename: "./styles/[name]-[hash].css",
            chunkFilename: "[id].css"
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    devServer: {
        contentBase: outputPath,
        historyApiFallback: false
    }
}