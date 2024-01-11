import gulp from 'gulp'
import html from './gulp/tasks/html.mjs'
import styles from './gulp/tasks/styles.mjs'
import scripts from './gulp/tasks/scripts.mjs'
import cleanDist from './gulp/tasks/cleanDist.mjs'
import fonts, { fontsWoff, fontsSvg } from './gulp/tasks/fonts.mjs'
import files from './gulp/tasks/files.mjs'
import images, { imagesAvif, imagesWebp, imagesSvg } from './gulp/tasks/images.mjs'
import icons from './gulp/tasks/icons.mjs'
import favicon from './gulp/tasks/favicon.mjs'
import server from './gulp/tasks/server.mjs'
import watcher from './gulp/tasks/watcher.mjs'

gulp.task('default', gulp.series(
    cleanDist,
    gulp.parallel(html, styles, scripts, fonts, files, imagesAvif, imagesSvg, icons, favicon),
    gulp.parallel(server, watcher)
));

gulp.task('build', gulp.series(
    cleanDist,
    gulp.parallel(html, styles, scripts, fonts, fontsWoff, fontsSvg, files, images, imagesWebp, imagesAvif, imagesSvg, icons, favicon),
));
