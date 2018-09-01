const gulp = require('gulp')
const spawn = require("child_process").spawn;
const pyPath = require('path').resolve(__dirname, "../templates/external/clashAPI.py")

gulp.task('pullClashAPI', () => new Promise( (resolve, reject) => {
    const pythonProcess = spawn('python', [pyPath])
    
    pythonProcess.stderr.on('data', data => {
        reject(data.toString())
    })

    pythonProcess.stdout.on('data', data => {
        resolve()
    })
}))
