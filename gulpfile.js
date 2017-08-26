const gulp = require('gulp');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const plumber = require('gulp-plumber');
const env = process.env.NODE_ENV;
const webserver = require('gulp-webserver');

// jsとcssの削除
gulp.task('clean', () => {
  del(['./dist/js/**', './dist/css/**']);
});

// TypeScriptのコンパイルとwebpackの実行
gulp.task('build', () => {
  gulp.src(['./src/*.ts'])
  .pipe(plumber())
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest('./dist'));
});

gulp.task("default", function() {
  gulp.watch(["src/**/*.ts", "src/**/*.vue"],["build"]);
});

gulp.task('webserver', function () {
	gulp.src('.') // 公開したい静的ファイルを配置したディレクトリを指定する
		.pipe(webserver({
			host: 'localhost',
			port: 8000,
			livereload: true
		}));
});
