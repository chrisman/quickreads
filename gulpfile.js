var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var reload = require('gulp-livereload');
var sync = require('browser-sync').create();
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var compress = require('gulp-uglify');

var path = {
  dest: './public/',
  src: './app/'
};

//////////
// HTML //
//////////

gulp.task('html', () => {
  return gulp.src([
    `${path.src}jade/**/*.jade`,
    `!${path.src}jade/includes/*`,
  ])
    .pipe(jade())
    .pipe(gulp.dest(path.dest))
});

////////////
// STYLEZ //
////////////

gulp.task('css', () => {
  return gulp.src(path.src + 'sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest(`${path.dest}css`))
});

/////////////
// SCRIPTS //
/////////////

gulp.task('js', () => {
  return browserify(`${path.src}js/app.js`)
    .bundle()
    .pipe(source('app.js'))
    //.pipe(streamify(compress()))
    .pipe(gulp.dest(path.dest + 'js'));
});

gulp.task('watcher', () => {
  sync.init({
    server: path.dest,
    open: true
  }, function callback(){
    gulp.watch(path.dest + 'index.html', sync.reload)
    gulp.watch(path.dest + '**/*css', sync.reload)
  });
  gulp.watch(path.src + 'jade/**/*.jade', ['html']);
  gulp.watch(path.src + 'sass/**/*.sass', ['css']);
  
  reload.listen();
  gulp.watch(path.dest).on('change', reload.changed);
});

gulp.task('default', ['html', 'css', 'js', 'watcher'])
