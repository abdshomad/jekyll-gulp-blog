var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');
var config      = require('../../config').sprites;

/**
 * Generate sprite and css file from PNGs
 */
gulp.task('sprites', function() {

  var spriteData = gulp.src(config.src).pipe(spritesmith(config.options));

  spriteData.img
    .pipe(gulp.dest(config.dest.image));

  spriteData.css
    .pipe(gulp.dest(config.dest.css));
});

//  I split my config into three subsections:
//  The source files (individual icons for the sprite),
//  the destination for the sprite and the css partial and
//  the options for the image sprite. I use a custom cssClass which will
//  generate :hover states by naming the hover sprites with -hover.
//
//  In the end I get two files: a partial _sprites.scss containing the class
//  attributes and a sprite icon-sprite.png containing all images.