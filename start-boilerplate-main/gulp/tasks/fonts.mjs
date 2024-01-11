import gulp from 'gulp'
import ttf2woff from 'gulp-ttf2woff'
import ttf2woff2 from 'gulp-ttf2woff2'
import ttf2svg from 'gulp-ttf-svg'
import changed from 'gulp-changed'
import { paths } from '../config.mjs'

const fonts = () => {
    return gulp
        .src(`${paths.src.fonts}/**/*.ttf`)
        .pipe(changed(paths.dist.fonts))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(paths.dist.fonts));
}

const fontsWoff = () => {
    return gulp
        .src(`${paths.src.fonts}/**/*.ttf`)
        .pipe(ttf2woff())
        .pipe(gulp.dest(paths.dist.fonts));
}

const fontsSvg = () => {
    return gulp
        .src(`${paths.src.fonts}/**/*.ttf`)
        .pipe(ttf2svg())
        .pipe(gulp.dest(paths.dist.fonts));
}

export { fontsWoff, fontsSvg }

export default fonts
