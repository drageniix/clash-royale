const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')
const fs = require('fs-extra')

const outputDirectory = './src/generated'

gulp.task('cleanSprites', () => fs.emptyDir(`${outputDirectory}/sprites`))

const config = {
    shape: {
        dimension: { // Set maximum dimensions
            maxWidth: 64,
            maxHeight: 64
        }
    },
    mode: {
        symbol: {
            dest: "./sprites",
            sprite: "sprite-symbol.svg"
        },
        view: {
            dest: "./sprites",
            bust: false,
            sprite: 'sprite-view.svg',
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