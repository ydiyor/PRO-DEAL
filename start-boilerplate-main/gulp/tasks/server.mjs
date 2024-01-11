import browserSync from 'browser-sync'
import { paths } from '../config.mjs'

const serverBS = browserSync.create()
const serverConfig = {
    server: {
        baseDir: paths.dist._
    }
}

const server = () => {
    serverBS.init(serverConfig)
}

export default server
export { serverBS }
