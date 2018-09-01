const gulp = require('gulp')
const fs = require('fs-extra')
const sharp = require('sharp')

const outputDirectory = './src/generated/images-css'

gulp.task('createImageCSSJSON', () => fs.emptyDir(outputDirectory)
    .then(() => fs.copy('./src/assets/images-css/', outputDirectory))
    .then(() => fs.readJSON('./gulp/templates/styles/_images-css.json'))
    .then(json => createCSSImageFiles(json)))

function createCSSImageFiles(json) {
    return new Promise((resolve, reject) => {
            json.items.forEach(item => {
                if (item.alternates) {
                    item.files.forEach(src => {
                            const source = { name: src.slice(0, src.indexOf('.')), extension: src.slice(src.indexOf('.')) }
                            item.alternates.forEach(alter => {
                                sharp(`./src/assets/images-css/${src}`)
                                    .resize(alter.size)
                                    .toFile(`${outputDirectory}/${alter.filename.replace('[name]', source.name).replace('[extension]', source.extension)}`)
                            })
                    })
                }
            })
            resolve()
        })
}