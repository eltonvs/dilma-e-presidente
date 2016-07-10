// Load plugins
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

// Set file directories
var assets = "dist/",
    scss_in = "src/sass/**/*.scss",
    scss_out = assets + "css",
    js_in = "src/js/**/*.js",
    js_out = assets + "js",
    img_in = "src/img/**/*",
    img_out = assets + "img";

// Styles
gulp.task('styles', function () {
  return gulp.src(scss_in)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(scss_out))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest(scss_out))
    .pipe(notify({message: 'Styles task complete'}));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src(js_in)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(js_out))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(js_out))
    .pipe(notify({message: 'Scripts task complete'}));
});

// Images
gulp.task('images', function() {
  return gulp.src(img_in)
    .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
    .pipe(gulp.dest(img_out))
    .pipe(notify({message: 'Images task complete'}));
});

// Clean
gulp.task('clean', function() {
  return del([scss_out, js_out, img_out]);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts', 'images');
});

// Watch
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch(scss_in, ['styles']);
  // Watch .js files
  gulp.watch(js_in, ['scripts']);
  // Watch image files
  gulp.watch(img_in, ['images']);
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch([assets + '**']).on('change', livereload.changed);
});
