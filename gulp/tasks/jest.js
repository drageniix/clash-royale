const jestCLI = require('jest-cli')
const gulp = require('gulp')

gulp.task('testSuites', () => jestCLI.runCLI({
    //todo: jest options
}, ['./']))
