const gulp = require('gulp')

require('./gulp/tasks/sprites')
require('./gulp/tasks/images-css')
require('./gulp/tasks/data')
require('./gulp/tasks/tests')
require('./gulp/tasks/webpack')
require('./gulp/tasks/server')

gulp.task('templates', gulp.series([
    'createSprites',
    'createImageCSSJSON',
    'createImageJSON']))

gulp.task('start', gulp.series([
    'test',
    'templates'],
    gulp.parallel('webpack-server', function watchTemplates() {
        gulp.watch(['./tests/*/*'],
            gulp.series('test'))
        gulp.watch(['./gulp/templates/data/*'],
            gulp.series('createDataJSON'))
        gulp.watch(['./gulp/templates/images/*', './src/assets/images/*'],
            gulp.series('createImageJSON'))
        gulp.watch(['./gulp/templates/styles/_images-css.json', './src/assets/images-css/*'],
            gulp.series('createImageCSSJSON'))
        gulp.watch(['./gulp/templates/styles/_sprites.scss', './src/assets/icons/*'],
            gulp.series('createSprites'))
    }))
)

gulp.task('build', gulp.series([
    'test',
    'templates',
    'webpack-build',
    'live-server'])
)