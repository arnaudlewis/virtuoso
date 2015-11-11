var gulp = require('gulp'),
gutil = require('gulp-util'),
uglify = require('gulp-uglify'),
sass = require('gulp-sass'),
cssmin = require('gulp-cssmin'),
concat = require('gulp-concat'),
autoprefixer = require('gulp-autoprefixer'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
minifyCSS = require('gulp-minify-css'),
rename = require('gulp-rename'); 


gulp.task('build-js', function () {
    gulp.src(['./js/jquery.js', './js/**/*.js'])
    .pipe(concat('virtuoso.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename('virtuoso.min.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch-js', function() {
    gulp.watch(['./js/**/*.js'], ['build-js']);
});

gulp.task('build-sass', function () {
    gulp.src('stylesheets/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false}))
    .pipe(gulp.dest('./dist/'))
    .pipe(minifyCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch-sass', function() {
    gulp.watch(['./stylesheets/**/*.scss'], ['build-sass']);
});

gulp.task('default', ['build-js', 'watch-js', 'build-sass', 'watch-sass']);