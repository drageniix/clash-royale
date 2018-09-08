const config = require('../../webpack.config')
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack')
const outputPath = require('path').resolve(__dirname, "../../public")
const HOST = 'localhost'//'192.168.1.165'
const PORT = 8080

const runWebpack = (server) => {
    
    return new Promise((resolve, reject) => {
        server ? 
        
            new WebpackDevServer(webpack(config), {
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