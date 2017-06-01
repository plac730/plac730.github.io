var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  vars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  mixins = require('postcss-mixins');  

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, vars, nested, autoprefixer]))
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});
