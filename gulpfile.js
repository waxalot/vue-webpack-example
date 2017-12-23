'use strict';

var gulp = require('gulp');
var webpack = require('webpack-stream');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

var dirs = {
    src: 'src/',
    build: 'build/',
    dist: "dist/",
    nodeModules: "node_modules/",
    tests: "src/tests/",
    release: "release/",
    debug: "debug/",
    css: "css/"
};


/********************************************
 *  Build
 ********************************************/
gulp.task("build", function () {
    return gulp.src([dirs.src + "**/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(ts({
            "target": "es5",
            "module": "commonjs",
            "sourceMap": true,
            "noImplicitAny": true,
            "preserveConstEnums": true,
            "moduleResolution": "node",
            "removeComments": true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dirs.build + dirs.src));
});


/********************************************
 *  Publish 
 ********************************************/
gulp.task("publish:demoPage", function () {
    return gulp.src("index.html")
        .pipe(gulp.dest(dirs.dist));
});

gulp.task("publish:sass", function () {
    return gulp.src(dirs.src + dirs.css + '**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dirs.dist + dirs.css));
});

gulp.task("publish", ["publish:demoPage", "publish:sass"], function () {
    return gulp.src(dirs.src + 'index.ts')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(dirs.dist + dirs.src));
});

/********************************************
 *  Serve
 ********************************************/
gulp.task("serve", ["publish"], function () {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        browser: "chrome",
        files: [
            "dist/**/*",
            "index.html"
        ]
    });
});