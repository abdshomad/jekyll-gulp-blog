var gulp   = require('gulp');
var config = require('../../config').iconfont.production;

/**
 * Copy fonts to folder
 */
gulp.task('iconfonts:production', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});