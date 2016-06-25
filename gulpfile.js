// define all the things
var gulp        = require('gulp');
var bs          = require('browser-sync');
// use this bit of middleware for connect server to clean up urls
var hygienist   = require('hygienist-middleware');
var reload      = bs.reload;
var shell       = require('gulp-shell');
// exclude rendered files to avoid duplicate hits to the watch process
var files = ['**/*.html', '**/*.md', '**/*.markdown', '**/*.js', '**/*.scss', '!build/**/*.*'];

// build Jekyll, only the stuff that's changed since last time (documentation calls incremental mode experimental)
gulp.task('build', shell.task([
  'bundle exec jekyll build --incremental'
]))
// setup browsersync to reload browser when changes happen
gulp.task('serve', function() {
    bs({
        server:{
          baseDir: "build",
          middleware: hygienist("build")
        },
        notify: false,
    });
});
// look for changes to **source files**, then trigger a new incremental build and reload the browser
gulp.task('watch', function(){
  gulp.watch(files, ['build', reload]);
})
// the default task to call from the terminal: `gulp`
gulp.task('default', ['build', 'serve', 'watch']);
