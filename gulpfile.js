var gulp = require('gulp');
var pug = require('gulp-pug');
// default gulp task
gulp.task('default', ['pug'], function () {
    "use strict"
;
})
;
// Compile pug into HTML
gulp.task('pug', function () {
    "use strict";
    return gulp.src('./src/pug/pages/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'));
});