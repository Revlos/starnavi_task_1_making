var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task("server", function() {
  browserSync.init({
    server: {
      baseDir: "help_tasks/1",
      index: "1.html"
      //baseDir: "production"
    },
    open: false
  });
});