import gulp from 'gulp'
import html from './html.mjs'
import styles from './styles.mjs'
import scripts from './scripts.mjs'
import files from './files.mjs'
import { imagesAvif, imagesSvg } from './images.mjs'
import icons from './icons.mjs'
import { paths } from '../config.mjs'
import { serverBS } from './server.mjs'

const watcher = () => {
    gulp.watch(paths.watch.html, html).on('change', serverBS.reload)
    gulp.watch(paths.watch.styles, styles).on('change', serverBS.reload)
    gulp.watch(paths.watch.scripts, scripts).on('change', serverBS.reload)
    gulp.watch(paths.watch.files, files).on('change', serverBS.reload)
    gulp.watch(paths.watch.images, gulp.parallel(imagesAvif, imagesSvg)).on('change', serverBS.reload)
    gulp.watch(paths.watch.icons, icons).on('change', serverBS.reload)
}

export default watcher
