import gulp from 'gulp'
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import babel from 'gulp-babel'
import changed from 'gulp-changed'
import gulpIf from 'gulp-if'
import webpack from 'webpack-stream'
import config from '../../webpack.config.mjs'
import { isProduction, paths } from '../config.mjs'

const plumberConfig = {
    errorHandler: notify.onError({
        title: 'JS',
        message: 'Error: <%= error.message %>',
        sound: false
    })
}

const scripts = () => {
    return gulp
        .src(`${paths.src.scripts}*.js`)
        .pipe(changed(paths.dist.scripts))
        .pipe(plumber(plumberConfig))
        .pipe(gulpIf(isProduction, babel()))
        .pipe(webpack(config))
        .pipe(gulp.dest(paths.dist.scripts))
}

export default scripts
