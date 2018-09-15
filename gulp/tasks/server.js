const liveServer = require("live-server");
const gulp = require('gulp')

gulp.task('live-server', () => {
    return new Promise((resolve, reject) => {
        liveServer.start({
            root: "public",
            logLevel: 1,
            open: true
        });
        resolve()
    })
})