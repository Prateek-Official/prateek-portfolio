const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp
    .src('./src/styles/**/*.scss')
    // .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css'));
}

function watchSass() {
  gulp.watch('./src/styles/**/*.scss', compileSass);
}

exports.default = gulp.series(compileSass, watchSass);
exports.build = compileSass;
