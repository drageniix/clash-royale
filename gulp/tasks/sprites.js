const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')
const fs = require('fs-extra')

const outputDirectory = './src/generated'

gulp.task('cleanSprites', () => fs.emptyDir(`${outputDirectory}/view`))

const config = {
    shape: {
        dimension: { // Set maximum dimensions
            maxWidth: 150,
            maxHeight: 51
        }
    },
    mode: {
        view: { // Activate the «view» mode
            bust: false,
            sprite: 'sprite.svg',
            render: {
                scss: {
                    template: './gulp/templates/styles/_sprites.scss'
                }
            }
        },
    }
};

gulp.task('createSprites', gulp.series('cleanSprites', function createSVGSprite(){
    return gulp.src('./src/assets/icons/*.svg')
                .pipe(svgSprite(config))
                .pipe(gulp.dest(outputDirectory))
}))