var gulp = require('gulp');

var pug = require('gulp-pug');
var sass = require('gulp-sass');
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");

gulp.task('default', ['watch']) ;

gulp.task('watch', function(){
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('*.pug', ['pug']);
});

gulp.task('sass', function() {
  gulp.src('css/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(gulp.dest('css/'));
});

gulp.task('pug', function() {
  gulp.src('index.pug')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('./'));
});
