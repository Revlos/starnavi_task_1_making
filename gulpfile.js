var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task("server", function() {
  browserSync.init({
    server: {
      /**/
      baseDir: "help_tasks/3",
      index: "3.html"
      /*
      baseDir: "help_tasks/2",
      index: "2.html"*/
      /*
      baseDir: "production"*/
    },
    open: false
  });
});