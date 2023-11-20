//
// prepare data/ directory from base/ directory
//

import { lstatSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { stdout } from 'process'
import { sep } from 'path'
import { zlibSync } from 'fflate'

if (!isDir("data")) {
    mkdirSync(`data`)
}

let sizeUncompressed = 0
let sizeCompressed = 0
const sourceDirs = [`base`]
const directoryList = new Map<string, Map<string, boolean>>()
const animation = [" ", ".", "o", "O", "o", "."]
let animationTime = 0
let animationStep = 0

sourceDirs.forEach((sourceDir) => copyFiles(sourceDir))
writeDirectoryList(directoryList)
console.log(`uncompressed: ${bytes2megabytes(sizeUncompressed)}M, compressed: ${bytes2megabytes(sizeCompressed)}M`)

function copyFiles(sourceRoot: string, sourcePath: string = "") {
    const source = `${sourceRoot}${sep}${sourcePath}`
    for (const file of readdirSync(source)) {

        const now = Date.now()
        if (now - animationTime > 125) {
            animationTime = now
            stdout.write(`populating data/ ${animation[animationStep++]}\r`)
            if (animationStep === animation.length) {
                animationStep = 0
            }
        }
        const pathIn = `${source}${sep}${file}`
        const dirOut = `data${sep}${sourcePath}`
        const fileOut = `${dirOut}${sep}${file}`

        let directory = directoryList.get(dirOut)
        if (directory === undefined) {
            directory = new Map<string, boolean>()
            directoryList.set(dirOut, directory)
        }
        if (!isDir(dirOut)) {
            mkdirSync(dirOut)
        }
        if (isDir(pathIn)) {
            directory.set(file, true)
            copyFiles(sourceRoot, sourcePath.length === 0 ? file : `${sourcePath}${sep}${file}`)
            continue
        }
        if (
            file.endsWith("/directory.json") ||
            file.endsWith(".faces") ||
            file.endsWith(".parts") ||
            file.endsWith(".vertices") ||
            file.endsWith(".info") ||
            file.endsWith(".rot") ||
            file.endsWith(".target")
        ) {
            if (directory.has(file)) {
                console.warn(`file collision for ${fileOut}`)
            }
            directory.set(file, false)
            // console.log(`${pathIn} -> ${fileOut}.z`)
            const data = readFileSync(pathIn)
            const view = new Uint8Array(data)
            const compressed = zlibSync(view, { level: 9 })

            sizeUncompressed += data.length
            sizeCompressed += compressed.length
            writeFileSync(`${fileOut}.z`, compressed)
            continue
        }
        if (
            file.endsWith(".png") ||
            file.endsWith(".jpg") ||
            file.endsWith(".tif") ||
            file.endsWith(".bmp")
        ) {
            if (directory.has(file)) {
                console.warn(`file collision for ${fileOut}`)
            }
            directory.set(file, false)
            const data = readFileSync(pathIn)
            sizeUncompressed += data.length
            sizeCompressed += data.length
            writeFileSync(fileOut, data)
        }
    }
}

function writeDirectoryList(directoryList: Map<string, Map<string, boolean>>) {
    directoryList.forEach((directory, path) => {
        writeFileSync(`${path}/directory.json`,
            JSON.stringify(
                Array.from(
                    directory, ([file, isDir]) => ({ file, isDir })
                )
            )
        )
    })
}

function isDir(path: string) {
    try {
        return lstatSync(path).isDirectory()
    }
    catch (error) {
        if ((error as any).code === "ENOENT") {
            return false
        }
        throw error
    }
}

function bytes2megabytes(num: number) {
    return Math.round((num / 1024 / 1024 + Number.EPSILON) * 100) / 100
}
