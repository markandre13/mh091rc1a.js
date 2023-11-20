import { AbstractFileSystemAdapter } from "./AbstractFileSystemAdapter"
import { unzlibSync } from "fflate"

interface FileInfo {
    file: string
    isDir: boolean
    dir?: string[]
}

export class HTTPFSAdapter implements AbstractFileSystemAdapter {
    static debug = false
    static directoryCache = new Map<string, FileInfo>()

    readFile(pathname: string): string {
        if (HTTPFSAdapter.debug) {
            console.log(`HTTPJSFSAdapter.isFile('${pathname}')`)
        }
        if (pathname.endsWith(".z")) {
            if (HTTPFSAdapter.debug) {
                console.log(`load compressed file ${pathname}`)
            }
            const req = new XMLHttpRequest()
            req.overrideMimeType("text/plain; charset=x-user-defined")
            req.open("GET", `data/${pathname}`, false)
            req.send(null)
            if (req.status > 400) {
                throw new Error(`Request failed for '${pathname}': ${req.statusText}`)
            }
            const ab = new ArrayBuffer(req.responseText.length)
            const ua = new Uint8Array(ab)
            for (let i = 0; i < req.responseText.length; ++i) {
                ua[i] = req.responseText.charCodeAt(i)
            }
            const dec = new TextDecoder("utf-8")
            return dec.decode(unzlibSync(ua))
        }
        if (pathname.endsWith("/directory.json")) {
            if (HTTPFSAdapter.debug) {
                console.log(`load uncompressed file ${pathname}`)
            }
            const req = new XMLHttpRequest()
            req.open("GET", `data/${pathname}`, false)
            req.send(null)
            if (req.status < 400) {
                return req.responseText
            }
            throw new Error(`Request failed for '${pathname}': ${req.statusText}`)
        }
        return this.readFile(`${pathname}.z`)
    }
    exists(pathname: string): boolean {
        if (HTTPFSAdapter.debug) {
            console.log(`HTTPJSFSAdapter.exits('${pathname}')`)
        }
        let info = HTTPFSAdapter.directoryCache.get(pathname)
        if (info === undefined) {
            try {
                this.listDir(pathname)
            } catch (e) {
                return false
            }
            info = HTTPFSAdapter.directoryCache.get(pathname)
        }
        if (info === undefined) {
            return false
        }
        return true
    }
    isFile(pathname: string): boolean {
        if (HTTPFSAdapter.debug) {
            console.log(`HTTPJSFSAdapter.isFile('${pathname}')`)
        }
        let info = HTTPFSAdapter.directoryCache.get(pathname)
        if (info === undefined) {
            try {
                this.listDir(pathname)
            } catch (e) {
                throw Error(`HTTPFSAdapter.isFile('${pathname}')": failed to load directory ${pathname}`)
            }
            info = HTTPFSAdapter.directoryCache.get(pathname)
        }
        if (info === undefined) {
            throw Error(`HTTPFSAdapter.isFile('${pathname}'): info === undefined`)
        }
        return !info.isDir
    }
    isDir(pathname: string): boolean {
        if (HTTPFSAdapter.debug) {
            console.log(`HTTPFSAdapter.isDir('${pathname}')`)
        }
        const info = HTTPFSAdapter.directoryCache.get(pathname)
        if (info === undefined) {
            const slash = pathname.lastIndexOf("/")
            if (slash >= 0) {
                const i = HTTPFSAdapter.directoryCache.get(pathname.substring(0, slash))
                if (i !== undefined) {
                    if (i.dir?.includes(pathname.substring(slash + 1))) {
                        return true
                    }
                }
            }
            throw Error(`HTTPFSAdapter.isFile('${pathname}')`)
        }
        return info.isDir
    }
    listDir(pathname: string): string[] {
        if (HTTPFSAdapter.debug) {
            console.log(`HTTPFSAdapter.listDir('${pathname}')`)
        }

        let info = HTTPFSAdapter.directoryCache.get(pathname)
        if (info !== undefined && info.dir !== undefined) {
            return info.dir
        }

        if (info === undefined) {
            info = { file: "", isDir: true, dir: undefined }
        }

        const d = this.readFile(`${pathname}/directory.json`)
        const j = JSON.parse(d)
        info.dir = []
        for (const x of j) {
            const fullfile = `${pathname}/${x.file}`
            // console.log(`${pathname}/${x.file}`)
            info.dir.push(x.file)
            if (!x.isDir) {
                HTTPFSAdapter.directoryCache.set(fullfile, { file: x.file, isDir: false })
            }
        }
        HTTPFSAdapter.directoryCache.set(pathname, info)
        return info.dir
    }
    realPath(pathname: string): string {
        if (HTTPFSAdapter.debug) {
            console.log(`HTTPFSAdapter.realPath('${pathname}')`)
        }
        // throw Error()
        return pathname
    }
    joinPath(pathname1: string, pathname2: string): string {
        if (HTTPFSAdapter.debug) {
            console.log(`HTTPFSAdapter.joinPath('${pathname1}', '${pathname2}')`)
        }
        return `${pathname1}/${pathname2}`
    }
}
