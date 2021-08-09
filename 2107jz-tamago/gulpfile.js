// gulpプラグインを読み込みます
const { parallel, src, dest, watch } = require("gulp");
// Sassをコンパイルするプラグインを読み込みます
const sass = require('gulp-sass')(require('sass'));
const webserver = require('gulp-webserver');

/**
 * Sassをコンパイルするタスクです
 */
const compileSass = () =>
    src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(dest('./css'))
;

/**
 * Sassファイルを監視し、変更があったらSassを変換します
 */
const WatchSass = () =>
    watch([
        './sass/**/*.scss'
    ], compileSass)
;

/**
 * WebServer
 */
const webServer = () =>
    src('./')
        .pipe(webserver({
            port: 8000,
            livereload: true,
            open: true
        }))
;

// npx gulpというコマンドを実行した時、watchSassFilesが実行されるようにします
// exports.compilecss = compileSass;
exports.default = parallel(compileSass, WatchSass, webServer);