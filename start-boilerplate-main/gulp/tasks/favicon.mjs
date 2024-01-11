import gulp from 'gulp'
import { paths } from '../config.mjs'

const favicon = () => {
    return gulp
        .src(`${paths.src.favicon}/**/*`)
        .pipe(gulp.dest(paths.dist.favicon));
}

export default favicon
