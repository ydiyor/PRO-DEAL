import gulp from "gulp"
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import gulpSass from 'gulp-sass'
import * as sass from 'sass'
import sourceMaps from 'gulp-sourcemaps'
import changed from 'gulp-changed'
import sassGlob from 'gulp-sass-glob'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import gulpIf from 'gulp-if'
import autoprefixer from 'gulp-autoprefixer'
import csso from "gulp-csso"
import rename from 'gulp-rename'
import { isProduction, paths } from "../config.mjs"

const sassHandler = gulpSass(sass)

const plumberConfig = {
    errorHandler: notify.onError({
        title: 'SASS',
        message: 'Error: <%= error.message %>',
        sound: false
    })
}

const styles = () => {
    return gulp
        .src(`${paths.src.styles}*.scss`)
        .pipe(changed(paths.dist.styles))
        .pipe(plumber(plumberConfig))
        .pipe(sourceMaps.init())
        .pipe(sassGlob())
        .pipe(sassHandler())
        .pipe(gulpIf(isProduction, groupCssMediaQueries()))
        .pipe(gulpIf(isProduction, autoprefixer()))
        .pipe(gulpIf(isProduction, csso()))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(paths.dist.styles));
}

export default styles
