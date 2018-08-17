var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var reload = browserSync.reload;
var rename = require("gulp-rename");

// 静态服务器 + 监听 less/html 文件
gulp.task('serve', ['less'], function() {

    browserSync.init({
        files: [
            'code/asset/less/**/*.less',
            'code/asset/js/**/*.js',
            'code/view/**/*.html'
        ],
        server: "./code",
        browser: "chrome"
    });

    gulp.watch("code/asset/less/**/*.less", ['less']);
    gulp.watch("code/asset/js/**/*.js").on('change', reload);
    gulp.watch("code/view/**/*.html").on('change', reload);

});

// less编译后的css将注入到浏览器里实现更新
gulp.task('less', function() {
    return gulp.src("code/asset/less/**/*.main.less")
        .pipe(less())
        // rename
    .pipe(rename((filepath) => {
        filepath.basename = filepath.basename.replace(/\.(pre|dev|test|prod|main)$/, '');
    }))
    .on('error',function(e){
        console.log(e);
        this.end();
    })
        .pipe(gulp.dest("code/asset/css"))
        .pipe(reload({ stream: true }));
});

gulp.task('default', ['serve']);

gulp.task('build', ['serve']);