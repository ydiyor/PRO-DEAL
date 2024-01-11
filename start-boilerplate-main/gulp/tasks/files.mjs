import gulp from 'gulp'
import changed from 'gulp-changed'
import { paths } from '../config.mjs'

const files = () => {
    return gulp
        .src(`${paths.src.files}/**/*`)
        .pipe(changed(paths.dist.files))
        .pipe(gulp.dest(paths.dist.files));
}

export default files
