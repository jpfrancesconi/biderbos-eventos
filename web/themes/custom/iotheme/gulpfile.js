const gulp = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('sass/**/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('css'))
});

// Gulp watch syntax
gulp.task('watch', function(){
    gulp.watch('sass/**/*.scss', gulp.series(['sass'])); 
    // Other watchers
})