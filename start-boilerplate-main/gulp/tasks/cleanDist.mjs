import { existsSync } from 'node:fs';
import gulp from 'gulp'
import clean from 'gulp-clean'

import { paths } from "../config.mjs"

const cleanDist = (done) => {
    if (existsSync(paths.dist._)) {
        return gulp
            .src(paths.dist._, { read: false })
            .pipe(clean({ force: true }));
    }

    done();
}

export default cleanDist
