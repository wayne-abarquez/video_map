'use strict';

var path = require('path'),
    gulp = require('gulp'),
    args = require('yargs').argv
    ;

var paths = gulp.paths;
var $ = require('gulp-load-plugins')();

gulp.task('vendor-scripts', function () {
    return gulp.src([
        paths.bower + '/jquery/dist/jquery.min.js',
        paths.bower + '/underscore/underscore-min.js',
        paths.bower + '/angular/angular.min.js',
        paths.bower + '/angular-aria/angular-aria.min.js',
        paths.bower + '/angular-cookies/angular-cookies.min.js',
        paths.bower + '/angular-sanitize/angular-sanitize.min.js',
        paths.bower + '/angular-animate/angular-animate.min.js',
        paths.bower + '/angular-material/angular-material.js',
        paths.bower + '/sweetalert/dist/sweetalert.min.js',
        paths.bower + '/ngSweetAlert/SweetAlert.min.js',
        paths.bower + '/angular-treasure-overlay-spinner/dist/treasure-overlay-spinner.min.js',
        paths.srcLibJs + '/v3_epoly.js',
        paths.srcLibJs + '/canvas_marker.js',
        paths.bower + '/videogular/videogular.min.js',
        paths.bower + '/videogular-controls/vg-controls.min.js',
        paths.bower + '/videogular-buffering/vg-buffering.min.js',
        paths.bower + '/videogular-overlay-play/vg-overlay-play.min.js'
    ])
        .pipe($.concat('vendor.min.js'))
        .pipe($.uglify({mangle: false}).on('error', $.util.log))
        .pipe(gulp.dest(paths.destJs + '/'))
        .pipe($.size());
});

gulp.task('jq-scripts', function () {
    return gulp.src(paths.srcJs + '/app_jq.js')
        .pipe($.plumber())
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.concat('app-jq.min.js'))
        .pipe($.if(args.production, $.uglify()))
        .pipe($.if(args.production, $.jsObfuscator()))
        .pipe(gulp.dest(paths.destJs + '/'))
        .pipe($.size());
});

gulp.task('app-scripts', ['jq-scripts'], function () {
    return gulp.src(['!' + paths.srcJs + '/app_jq.js', paths.srcJs + '/app/*.js', paths.srcJs + '/app/**/*.js'])
        .pipe($.plumber())
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.ngAnnotate())
        .pipe($.angularFilesort())
        .pipe($.concat('app.min.js'))
        .pipe($.if(args.production, $.uglify()))
        .pipe($.if(args.production, $.jsObfuscator()))
        .pipe(gulp.dest(paths.destJs + '/'))
        .pipe($.size());
});

gulp.task('login-scripts', function () {
    return gulp.src([paths.srcLibJs + '/login.js',])
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.ngAnnotate())
        .pipe($.concat('login.min.js'))
        .pipe($.uglify({mangle: true}).on('error', $.util.log))
        .pipe(gulp.dest(paths.destJs + '/'))
        .pipe($.size());
});

gulp.task('scripts', ['vendor-scripts', 'app-scripts', 'login-scripts']);