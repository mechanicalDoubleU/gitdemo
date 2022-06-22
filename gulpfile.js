const gulp = require("gulp");
const gulpclean = require("gulp-clean");

function move_to_server(cb) {
  return gulp.src(["frontend/dist/**/*"]).pipe(gulp.dest("backend/dist/"));
}

function clean_front() {
  return gulp.src("frontend/dist", { read: true }).pipe(gulpclean());
}

function clean_back() {
  return gulp.src("backend/dist", { read: true }).pipe(gulpclean());
}

const clean = gulp.parallel(clean_back, clean_front);


exports.move_to_server = move_to_server;
exports.clean = clean;
