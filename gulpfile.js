var gulp=require("gulp"),
    uglify=require("gulp-uglify"),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin');


gulp.task('sass', function () {
  return gulp.src([
      'node_modules/bootstrap/scss/bootstrap.scss',
      'source/scss/main.scss'
      ])
    .pipe(sass({
				outputStyle: 'compressed'
				}).on('error', sass.logError))
	.pipe(concat('main.css'))
    .pipe(gulp.dest('dist/styles'));
});



gulp.task('scripts', function() {
  return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      "source/js/*.js"
      ])
    .pipe(concat('main.js'))
    .pipe(uglify())
	.pipe(gulp.dest("dist/scripts"));
});

gulp.task('images', function() {
  return gulp.src('source/images/**')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
});

gulp.task('watch', function() {
  gulp.watch('source/js/*.js',['scripts']); 
  gulp.watch('source/scss/**/*.scss',['sass']);
  gulp.watch('source/imagaes/**',['images']);
});


gulp.task('default', ['sass', 'scripts','images']);



