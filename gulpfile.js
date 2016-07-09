var gulp = require('gulp'),
  	connect = require('gulp-connect'),
  	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	minifyHtml = require('gulp-minify-html'),
	pump = require('pump'),
	clean = require('gulp-clean'),
	ngHtml2Js = require("gulp-ng-html2js"),
  	cleanCSS = require('gulp-clean-css');

gulp.task('minify-html', function(){
	gulp.src('app/index.html')
	.pipe(gulp.dest('dist'));

	gulp.src('.app/js/**/*.html')
	.pipe(minifyHtml({empty: true, spare: true, quotes: true}))
	.pipe(ngHtml2Js({moduleName: 'core'}))
	.pipe(concat('partials.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true,
    port:9090
  });
});

gulp.task('minify-css', function() {
  return gulp.src('./app/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
});
 
gulp.task('minify-js', function (cb) {
  pump([
        gulp.src('app/bundle.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});
 
gulp.task('bundle', function() {		
  return gulp.src([
  	'./node_modules/angular/angular.js', 
  	'./node_modules/angular-ui-router/release/angular-ui-router.js', 
  	'./node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js', 
  	'./node_modules/restangular/dist/restangular.js', 
  	'./node_modules/angular-file-upload/dist/angular-file-upload.js', 
  	'./node_modules/lodash/lodash.js', 
  	'./app/**/*.module.js',
  	'./app/**/*.js',
  	'./app/*.js', 
  	])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('app'));
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('clean', function () {
	gulp.src('app/bundle.js')
	.pipe(clean());
});
 
gulp.task('serve', ['bundle', 'connect', 'watch']);
gulp.task('build', ['minify-css', 'bundle', 'minify-js', 'minify-html']);
