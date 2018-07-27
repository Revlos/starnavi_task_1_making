var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task("server", function() {
  browserSync.init({
    server: {
      /*
      baseDir: "help_tasks/9",
      index: "9.html"*/
      /*
      baseDir: "help_tasks/8",
      index: "8.html"*/
      /*
      baseDir: "help_tasks/6_7",
      index: "6_7.html"*/
      /*
      baseDir: "help_tasks/6",
      index: "6.html"*/
      /*
      baseDir: "help_tasks/4_5",
      index: "4_5.html"*/
      /*
      baseDir: "help_tasks/3",
      index: "3.html"*/
      /*
      baseDir: "help_tasks/2",
      index: "2.html"*/
      /*
      baseDir: "help_tasks/0",
      index: "0.html"*/
      /**/
      baseDir: "production"
    },
    open: false
  });
});