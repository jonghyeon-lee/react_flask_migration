// requirements
var gulp = require('gulp');
var gulpBrowser = require('gulp-browser');
var reactify = require('reactify');
var del = require('del');
var size = require('gulp-size');


// tasks


/* 'TRANSFORM' task */

// 1. Defines the source directory
// 2. Pipes the JSX files through the Browserify JSX transformer
// 3. Specifies the destination directory
// 4. Calculates the size of the created file(s).
gulp.task('transform', function (){
	var stream = gulp.src('./project/static/scripts/jsx/*.js')
		.pipe(gulpBrowser.browserify({transform: ['reactify']}))
		.pipe(gulp.dest('./project/static/scripts/js/'))
		.pipe(size());
	return stream;
});

gulp.task('del', function(){
	return del(['./project/static/scripts/js']);
});

gulp.task('default', ['del'], function() {
  gulp.start('transform');
  gulp.watch('./project/static/scripts/jsx/*.js', ['transform']);
});