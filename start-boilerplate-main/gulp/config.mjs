const paths = {
    src: {
        _: './src/',
        html: './src/html/',
        styles: './src/scss/',
        fonts: './src/assets/fonts/',
        files: './src/assets/files/',
        images: './src/assets/images/',
        icons: './src/assets/icons/',
        favicon: './src/assets/favicon/',
        scripts: './src/js/'
    },
    dist: {
        _: './dist/',
        html: './dist/',
        styles: './dist/css/',
        fonts: './dist/assets/fonts/',
        files: './dist/assets/files/',
        images: './dist/assets/images/',
        icons: './dist/assets/icons/',
        favicon: './dist/',
        scripts: './dist/js/'
    },
    watch: {
        html: './src/html/**/*.html',
        styles: './src/scss/**/*.scss',
        files: './src/assets/files/**/*',
        images: './src/assets/images/**/*',
        icons: './src/assets/icons/**/*',
        scripts: './src/js/**/*.js',
    },
}

const isDev = !process.argv.includes('--production')
const isProduction = process.argv.includes('--production')

export { paths, isDev, isProduction }
