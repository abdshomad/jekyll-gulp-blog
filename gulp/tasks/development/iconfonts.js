var gulp          = require('gulp');
var rename        = require("gulp-rename");
var config        = require('../../config').iconfonts;
var iconfont      = require('gulp-iconfont');
var consolidate   = require('gulp-consolidate');
var gulpImagemin  = require('gulp-imagemin'); // simplify the svg in case you run into troubles with transformed elements
var runTimestamp  = Math.round(Date.now()/1000);

var fontName = 'loli'; // set name of your font
var template = 'fontawesome-style'; // you can also choose 'foundation-style'

// Font Awesome template: css/fontawesome-style.css
// <span class="s s-your_icon"></span>
//
// Foundation Icon Font 3 template: css/foundation-style.css
// <span class="s-your_icon"></span>




gulp.task('Iconfonts', function(){
  return gulp.src(config.vectors) //path to SVG
    .pipe(gulpImagemin()) // pipe image-min before you pass it to the iconfont task
    .pipe(iconfont({ fontName: fontName }))
    .on('glyphs', function(glyphs, options) {
      var options = {
            fontName: fontName,
            // normalize:true,
            // fontHeight: 1001, // fontHeight greater than 1000
            appendUnicode: true, // recommended option
            formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
            // fontPath: config.src, // set path to font (from your CSS file if
              // relative)
            timestamp: runTimestamp, // recommended to get consistent builds when watching files
            className: 's' // set class name in your CSS
      };
      gulp.src(config.style + template + '.css')
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename:fontName }))
        .pipe(gulp.dest(config.samples)); // set path to export your CSS
         // if you don't need sample.html, remove next 4 lines
      gulp.src(config.style + template + '.html')
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename:'sample' }))
        .pipe(gulp.dest(config.samples)); // set path to export your sample HTML
      })
      .pipe(gulp.dest(config.dest)); // set path to export your fonts
});