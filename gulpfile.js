var	gulp = require('gulp');
    sass = require('gulp-sass');
    postcss = require('gulp-postcss');
    autoprefixer = require('autoprefixer');
    sourcemaps = require('gulp-sourcemaps');
    concat = require('gulp-concat');
    uglify = require('gulp-uglify');
    rename = require('gulp-rename');
    del = require('del');
    imagemin = require('gulp-imagemin');
    cache = require('gulp-cache');
    notify = require("gulp-notify");
    include = require("gulp-include");
    browserSync = require('browser-sync');

gulp.task('common-js', function() {
	return gulp.src([
		'src/js/common.js',
		])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('src/js'));
});

gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'src/libs/**/*.js',
		'src/js/common.min.js'
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) 
	.pipe(gulp.dest('build/js'))
	.pipe(browserSync.reload({stream: true}));
});

// sass compile
let processors = [
  autoprefixer({browsers: ['last 5 versions'], cascade: false})
];

gulp.task('sass', function() {
  return gulp
    .src('src/sass/**/*.{sass,scss}')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .on('error', notify.onError({
      title: 'Sass Error!',
      message: '<%= error.message %>'
    }))
    .pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/css/'))
    .pipe(browserSync.reload({stream: true}));
});

// html
gulp.task('html', function () {
  gulp.src('src/[^_]*.html')
    .pipe(include())
    .on('error', function(){notify("HTML include error");})
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.reload({stream: true}));
});

// img
gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('build/img')); 
});

gulp.task('libs', function() {
  gulp.src(['src/libs/**/*']).pipe(gulp.dest('build/libs'));
});

//webserver
gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: 'build/'
    },
    port: 8080,
    notify: false,
    ghostMode: false,
    online: false,
    open: true
  });
});

gulp.task('removebuild', function() { return del.sync('build'); });

gulp.task('watch', ['imagemin', 'libs', 'html', 'sass', 'js'], function() {
  gulp.watch('src/sass/**/*.sass', ['sass']);
  gulp.watch('src/js/common.js', ['js']);
  gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['server', 'watch'], function() {});