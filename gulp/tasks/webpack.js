const gulp = require('gulp')
const config = require('../../webpack.config')
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack')
const outputPath = require('path').resolve(__dirname, "../../public")
const HOST = 'localhost'//'192.168.1.165'
const PORT = 8080

gulp.task('webpack-server', () => runWebpack(true))
gulp.task('webpack-build', () => runWebpack())

function runWebpack(server){
    return new Promise((resolve, reject) => {
        server ?

            new WebpackDevServer(webpack(config('development')), {
                contentBase: outputPath,
                historyApiFallback: false,
                hot: true,
                inline: true,
                host: HOST,
                port: PORT
            })
                .listen(PORT, HOST, err => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
                )

            :

            webpack(config('production'), (err, stats) => {
                if (err) {
                    reject(err)
                } else {
                    console.log(stats.toString({
                        colors: true,
                        cachedAssets: false,
                        chunks: false,
                        modules: false,
                        children: false,
                        warnings: false,
                    }))
                    resolve(stats)
                }
            })
    })
}