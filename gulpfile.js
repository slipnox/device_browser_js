const gulp = require('gulp')
const babel = require('gulp-babel')
const babili = require('gulp-babili')
const rename = require('gulp-rename')

gulp.task('default', ['babel', 'babili', 'watch'], () => {
  console.log('Compiled!!!')
  console.log('Whatching for changes!!!')
})

gulp.task('babel', () => {
  gulp.src('./src/*.es6')
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(gulp.dest('./dist/', {overwrite: true}))
})

gulp.task('babili', ['babel'], () => {
  gulp.src(['./dist/*device.js'])
    .pipe(babili())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/', {overwrite: true}))
})

gulp.task('watch', function () {
  gulp.watch('./src/*.es6', ['babel', 'babili'])
})
