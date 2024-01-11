import gulp from "gulp"
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import fileInclude from "gulp-file-include"
import changed from 'gulp-changed'
import htmlmin from "gulp-htmlmin"
import gulpIf from "gulp-if"
import { isProduction, paths } from "../config.mjs"

const plumberConfig = {
    errorHandler: notify.onError({
        title: 'HTML',
        message: 'Error: <%= error.message %>',
        sound: false
    })
}

const fileIncludeConfig = {
    prefix: '@@',
    basepath: '@file'
}

const html = () => {
    return gulp
        .src([`${paths.src.html}**/*.html`, `!${paths.src.html}**/_*.html`])
        .pipe(changed(paths.dist.html, { hasChanged: changed.compareContents }))
        .pipe(plumber(plumberConfig))
        .pipe(fileInclude(fileIncludeConfig))
        .pipe(gulpIf(isProduction, htmlmin({ collapseWhitespace: true })))
        .pipe(gulp.dest(paths.dist.html))
}

export default html
