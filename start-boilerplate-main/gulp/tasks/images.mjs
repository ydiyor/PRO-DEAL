import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import changed from 'gulp-changed'
import webp from 'gulp-webp'
import avif from 'gulp-avif'
import { paths } from '../config.mjs'

const images = () => {
    return gulp
        .src(`${paths.src.images}/**/*.{jpg,jpeg,png,gif}`)
        .pipe(changed(paths.dist.images))
        .pipe(imagemin({ verbose: true }))
        .pipe(gulp.dest(paths.dist.images))
}

const imagesWebp = () => {
    return gulp
        .src(`${paths.src.images}/**/*.{jpg,jpeg,png,gif}`)
        .pipe(webp())
        .pipe(gulp.dest(paths.dist.images))
}

const imagesAvif = () => {
    return gulp
        .src(`${paths.src.images}/**/*.{jpg,jpeg,png,gif}`)
        .pipe(avif({
            quality: 80
        }))
        .pipe(gulp.dest(paths.dist.images))
}

const imagesSvg = () => {
    return gulp
        .src(`${paths.src.images}/**/*.svg`)
        .pipe(changed(paths.dist.images))
        .pipe(gulp.dest(paths.dist.images));
}

export { imagesWebp, imagesAvif, imagesSvg }

export default images
