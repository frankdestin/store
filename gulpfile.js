// All used Modules
var gulp = require ('gulp');
var babel = require ('gulp-babel');
var runSeq = require ('run-sequence');
var plumber = require ('gulp-plumber');
var concat = require ('gulp-concat');
var rename = require ('gulp-rename');
var sass = require ('gulp-sass');
var livereload = require ('gulp-ivereload');
var minifyCSS = require ('gulp-minify-css');
var ngAnnotate = require ('gulp-ng-annotate');
var uglify = require ('gulp-uglify');
var sourcemaps = require ('gulp-sourcemaps');
var eslint = require ('gulp-eslint');
var mocha = require ('gulp-mocha');
var karma = require ('karma'). server;
var istanbul = require ('gulp-istanbul');
var notify = require ('gulp-notify');


//Development tasks
//...............................................................................
gulp.task('travis',['build','testServerJS'], function() {
    process.exit(0);
});

//live reload business.
gulp.task('reload', function(){
    livereload.reload();
})

gulp.task('reloadCSS', function(){
    return gulp.src('./public/style.css').pipe(livereload());
})

