var gulp = require('gulp');
// Include Our Plugins
var jshint  = require('gulp-jshint');
var stylus  = require('gulp-stylus');
var jade    = require('gulp-jade');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var connect = require('gulp-connect');

//lint JS
gulp.task('lint', function() {
	return gulp.src('dev/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Compile stylus to css
gulp.task('stylus', function() {
	return gulp.src('dev/styl/main.styl')
		.pipe(concat('main.styl'))
		.pipe(stylus())
		.pipe(gulp.dest('www/css'))

});

//compile jade to html
gulp.task('jade', function() {
	gulp.src('dev/jade/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('www'))
});



// Concatenate & Minify JS
gulp.task('scripts', function() {
	gulp.src('dev/js/*.js')
		.pipe(concat('all.js'))
		//.pipe(uglify())
		.pipe(rename('all.min.js'))
		.pipe(gulp.dest('www/js'));
	gulp.src('dev/js/lib/*.js')
		.pipe(gulp.dest('www/js/lib'));
});


//copy statics && js libs
gulp.task('statics', function() {
	gulp.src('static/**/*.*')
		.pipe(gulp.dest('www/static'));
	gulp.src('dev/css/**/*.*')
		.pipe(gulp.dest('www/css'))

});




// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('dev/js/*.js', ['lint', 'scripts']);
	gulp.watch('dev/styl/*.styl', ['stylus']);
	gulp.watch('dev/jade/*.jade', ['jade']);
});


//init http server
gulp.task('connect', function() {
	connect.server({
		root:"www",
		port:2211
	});
});


// Default Task
gulp.task('default', ['jade', 'stylus', 'scripts', 'statics', 'watch']);
