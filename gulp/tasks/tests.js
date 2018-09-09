const gulp = require('gulp')
const jestCLI = require('jest-cli')
const jestConfig = require('../../jest.config.json')

gulp.task('test', () => jestCLI.runCLI(jestConfig, ['./']))
