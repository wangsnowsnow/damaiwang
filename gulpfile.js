let gulp = require("gulp");
// let concat = require("gulp-concat");
// let uglify = require('gulp-uglify');
// let rename = require('gulp-rename');
// let mincss = require('gulp-minify-css');
// let minimg = require('gulp-imagemin');
// let sass = require('gulp-sass');

gulp.task("copyall",async ()=>{
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai"));

	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai\\js"));

	gulp.src("css/*.css")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai\\css"));

	gulp.src("img/*.{jpg,png}")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai\\img"));

	gulp.src("icon/**/*")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai\\icon"));

	gulp.src("font/**/*")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai\\font"));

	gulp.src("/*.php")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai"));

	gulp.src("*.php")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai"));
});

gulp.task("watchall",async ()=>{
	gulp.watch("damaiwang/*.html",async ()=>{
	gulp.src("damai/*.html")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai"));
	})
	gulp.watch("damaiwang/css/*.css",async ()=>{
	gulp.src("damai/css/*.css")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai\\css"));
	})
	gulp.watch("damaiwang/js/*.js",async ()=>{
	gulp.src("damai/js/*.js")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai\\js"));
	})
	gulp.watch("damaiwang/img/*.{jpg,png}",async ()=>{
	gulp.src("damai/img/*.{jpg,png}")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai\\img"));
	})
	gulp.watch("damaiwang/*.php",async ()=>{
	gulp.src("damai/*.php")
	.pipe(gulp.dest("D:\\PHP\\WWW\\damai"));
	})
	// gulp.watch("dami/sass/**/*",async ()=>{
	// 	gulp.src("sass/**/*")
	// 	.pipe(sass())
	// 	.pipe(gulp.dest("D:\\PHP\\WWW\\damai\\css"));
	// })
})
// gulp.task("concatfile",async ()=>{
// 	gulp.src(['js/index.js','js/login.js'])
// 	.pipe(concat('tools.js'))
// 	.pipe(gulp.dest('D:\\PHP\\WWW\\damai\\js'));
// })
// gulp.task("concatanduglify",async ()=>{
	
// 	gulp.src(['js/index.js','js/login.js'])
// 	.pipe(concat('tools.js'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('D:\\PHP\\WWW\\damai\\js'));

// });
// gulp.task("concatanduglifyandrename",async ()=>{
// 	gulp.src(['js/index.js','js/login.js'])
// 	.pipe(concat('tools.js'))
// 	.pipe(gulp.dest('D:\\PHP\\WWW\\damai\\js'))
// 	.pipe(uglify())
// 	.pipe(rename('tools.min.js'))
// 	.pipe(gulp.dest('D:\\PHP\\WWW\\damai\\js'));
// });
// gulp.task("minifycss",async ()=>{
// 	gulp.src("css/*.css")
// 	.pipe(mincss())
// 	.pipe(gulp.dest('D:\\PHP\\WWW\\damai\\css'));
// });
// gulp.task("minimg",async ()=>{
// 	gulp.src("img/*.{jpg,png}")
// 	.pipe(minimg())
// 	.pipe(gulp.dest('D:\\PHP\\WWW\\damai\\img'));
// });
// gulp.task("copyall",async ()=>{
// 	gulp.src("damaiwang/**/*")
// 	.pipe(gulp.dest("D:\\PHP\\WWW\\damai"));
// });
