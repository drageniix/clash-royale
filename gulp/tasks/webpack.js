const gulp = require('gulp')
const fs = require('fs-extra')
const webpackConfig = require('../templates/webpackRunner')

gulp.task('webpack-server', () => webpackConfig(true))
gulp.task('start', gulp.series([
    'test',
    'createSprites',
    'createImageCSSJSON',
    'createImageJSON'], 
    gulp.parallel('webpack-server', function watchTemplates(){ 
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
    }
)))
 
gulp.task('cleanBuild', () => fs.emptyDir('./public'))
gulp.task('webpack-build', () => webpackConfig())
gulp.task('build', gulp.series([
    'test',
    'cleanBuild',
    'createSprites',
    'createImageCSSJSON',
    'createImageJSON',
    'webpack-build'])
)