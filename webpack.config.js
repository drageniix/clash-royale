const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')
const ResponsiveJSONWebpackPlugin = require('D:/Dropbox/Programming/Web Development/_Packages/ResponsiveJSONWebpackPlugin/index.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require('path')

const outputPath = path.resolve(__dirname, 'public/')

const appTitle = '3 Dark Towers'
const themeColor = '#da2ee5'
const appDescription = 'Clash Royale Clan | Est 2016'
const manifest = {
    name: appTitle,
    short_name: '3DT',
    description: appDescription,
    background_color: '#ffffff',
    theme_color: themeColor,
    fingerprints: false,
    icons: [
        {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512]
        }
    ]
}

function getPlugins(isProduction) {
    const plugins = [
        getHTMLWebPackPlugin('index', '.'),
        new SWPrecacheWebpackPlugin({
            cacheId: 'sample-cache-id',
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            minify: true,
            navigateFallback: outputPath + 'index.html',
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        }),
        new WebpackPwaManifest(manifest),
        new MiniCssExtractPlugin({
            filename: './styles/[hash].css',
            chunkFilename: '[hash].css'
        }),
        new ResponsiveJSONWebpackPlugin(),
    ]

    if (isProduction) {
        plugins.unshift(
            new BundleAnalyzerPlugin(),
            new CleanWebpackPlugin(['public'], {
                verbose: false
            })
        )
    }

    return plugins
}

function getHTMLWebPackPlugin(pageEntry, destPath) {
    return new HtmlWebPackPlugin({
        chunks: [pageEntry],
        template: './src/index.ejs',
        filename: destPath + '/index.html',
        title: appTitle,
        description: appDescription,
        themeColor: themeColor,
        favicon: `./src/assets/${pageEntry === 'index' ? '' : 'images/' + pageEntry + '/'}favicon.png`,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            preserveLineBreaks: false
        }
    })
}

module.exports = env => {
    const isProduction = env == 'production'

    return {
        entry: {
            index: ['@babel/polyfill', './src/app.js', './src/styles/index.scss']
        },
        output: {
            path: outputPath,
            filename: './scripts/[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader'
                    ],
                }, {
                    test: /\.s?css$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
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
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: getPlugins(isProduction),
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
            contentBase: outputPath,
        },
    }
}