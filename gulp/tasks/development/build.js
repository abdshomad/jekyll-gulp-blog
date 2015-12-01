var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function() {
  runSequence('delete',
  [
    'jekyll',
    'sass',
    'scripts',
    'images',
    'iconfont'
  ],
  'base64'
  );
});