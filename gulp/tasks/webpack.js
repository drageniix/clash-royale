const gulp = require('gulp')
const config = require('../../webpack.config')
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack')

gulp.task('webpack-server', () => runWebpack(true))
gulp.task('webpack-build', () => runWebpack())

function runWebpack(server){
    return new Promise((resolve, reject) => {
        const configSettings = server ? config('development') : config('production')
        
        if ( server ){
            new WebpackDevServer(webpack(configSettings), configSettings.devServer)
                .listen(configSettings.devServer.port, configSettings.devServer.host, err => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
                )
        } else {
            webpack(configSettings, (err, stats) => {
                if (err) {
                    reject(err)
                } else {
                    console.log(stats.toString(configSettings.stats))
                    resolve(stats)
                }
            })
        }
    })
}