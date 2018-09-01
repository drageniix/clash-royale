const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack')

const outputPath = require('path').resolve(__dirname, "../../public")
const HOST = 'localhost'//'192.168.1.165'
const PORT = 8080

const runWebpack = (server, 
    entryPoint = './src/app.js', 
    appTitle = '3 Dark Towers') => {
    
    const config = {
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
                        plugins: ['transform-class-properties']
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
        }
    }

    const serverConfig = {
        contentBase: outputPath,
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: HOST,
        port: PORT
    }

    return new Promise((resolve, reject) => {
        server ? 
        
        new WebpackDevServer(webpack(config), serverConfig)
            .listen(PORT, HOST, err => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            }
        )

        :
        
        webpack(config, (err, stats) => {
            if (err) {
                reject(err)
            } else {
                console.log(stats.toString({ colors: true }))
                resolve(stats)
            }
        })
    })
}

module.exports = runWebpack