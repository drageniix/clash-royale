const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputPath = require('path').resolve(__dirname, "public")
function getHTMLWebPackPlugin(pageEntry, destPath){
    return new HtmlWebPackPlugin({
        chunks: [pageEntry],
        template: "./src/index.html",
        filename: destPath + "/index.html",
        title: '3 Dark Towers',
        favicon: "./src/assets/favicon.png",
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            preserveLineBreaks: true
        }
    })
}

module.exports = env => {
    const isProduction = env == 'production'

    return {
        entry: {
            index: ['babel-polyfill', './src/app.js', './src/styles/index.scss'],
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
            new CleanWebpackPlugin(['public'], {
                verbose: false
            }),
            getHTMLWebPackPlugin('index' , '.'),
            new MiniCssExtractPlugin({
                filename: "./styles/[hash].css",
                chunkFilename: "[hash].css"
            })
        ],
        optimization: {
            splitChunks: {
                chunks: 'all'
            },
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
        mode: isProduction ? 'production' : 'development',
        stats: {
            colors: true,
            cachedAssets: false,
            chunks: false,
            modules: false,
            children: false,
            warnings: false,
        },
        devServer: {
            contentBase: '../../public',
            historyApiFallback: false,
            host: 'localhost',
            port: 8080
        },
    }
}