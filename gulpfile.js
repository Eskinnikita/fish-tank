var gulp = require("gulp");
var cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");
const minify = require("gulp-minify");

async function defaultTasks() {
    minimizeCSS()
    minimizeJS()
}

async function minimizeCSS() {
  return gulp
    .src("style/main.css")
    .pipe(cssnano())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("./out"));
}

async function minimizeJS() {
  gulp
    .src(["js/script.js"])
    .pipe(minify())
    .pipe(gulp.dest("./out"));
}

exports.minimizeJS = minimizeJS;
exports.minimizeCSS = minimizeCSS;
exports.default = defaultTasks;