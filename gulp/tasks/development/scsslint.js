var gulp     = require('gulp');
var scsslint = require('gulp-scss-lint');
var config   = require('../../config').scsslint;

/**
 * Lint SCSS files
 * `gem install scss-lint` needed
 *
 * bundleExec
 * Type: Boolean
 * Default: false
 * If your gem is installed via bundler,
 * then set this option to true
 * scsslint({
 *   'bundleExec': true
 * });
 */
gulp.task('scsslint', function() {
  return gulp.src(config.src)
    .pipe(scsslint(config.options));
});