import gulp from 'gulp'
import changed from 'gulp-changed'
import { paths } from '../config.mjs'

const icons = () => {
    return gulp
        .src(`${paths.src.icons}/**/*`)
        .pipe(changed(paths.dist.icons))
        .pipe(gulp.dest(paths.dist.icons));
}

export default icons
