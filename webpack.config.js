const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const outputPath = require('path').resolve(__dirname, "public")
const entryPoint = './src/app.js'
const appTitle = '3 Dark Towers'

module.exports = (env) => {
    const isProduction = env == 'production'
    
    return {
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
                        options: { 
                            url: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: () => [require('autoprefixer')({
                                'browsers': ['> 1%', 'last 2 versions']
                            })],
                        }
                    },
                    {   
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.(jpg|png|svg|gif)$/,
                exclude: /node_modules/,
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
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        map: {
                            inline: false,
                            annotation: true
                        }
                    }
                })
            ]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        mode: isProduction ? 'production' : 'development'
    }
}