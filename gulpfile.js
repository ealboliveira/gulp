  const gulp = require('gulp');
  const sass = require('gulp-sass')(require('sass'));
  const imagemin = require('gulp-imagemin');
  const uglify = require('gulp-uglify');
  const rename = require('gulp-rename');

  // Tarefa para compilar SASS
  gulp.task('sass', function () {
      return gulp.src('src/sass/style.scss')
        .pipe(sass({ outputStyle: 'compressed' })) // Comprimir o CSS
        .pipe(gulp.dest('dist/css'));
  });

  // Tarefa para comprimir imagens
  gulp.task('imagemin', function () {
    return gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'));
  });

  // Tarefa para comprimir código JavaScript
  gulp.task('uglify', function () {
    return gulp.src('src/script.js')
      .pipe(uglify()) 
      .pipe(rename('script.min.js')) 
      .pipe(gulp.dest('dist/js'));
  });

  // Tarefa padrão que executa todas as tarefas
  gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));
