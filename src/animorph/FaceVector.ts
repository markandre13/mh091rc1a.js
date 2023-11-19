import { Face } from "./Face"
import { FileSystemAdapter } from "../filesystem/FileSystemAdapter"
import { StringToLine } from "../lib/StringToLine"

export class FaceVector extends Array<Face> {
    loadGeometry(filename: string) {
        const data = FileSystemAdapter.readFile(`data/${filename}`)
        const reader = new StringToLine(data)
        let lineNumber = 0, triangles = 0, quads = 0
        for (let line of reader) {
            ++lineNumber
            line = line.trim()
            const tokens = line.split(/,+/)
            switch (tokens.length) {
                case 3:
                    ++triangles
                    this.push(new Face(parseFloat(tokens[0]), parseFloat(tokens[1]), parseFloat(tokens[2])))
                    break
                case 4:
                    ++quads
                    this.push(new Face(parseFloat(tokens[0]), parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3])))
                    break
            }
        }
        console.log(`loaded ${triangles} triangles and ${quads} quads from ${filename}`)
    }
}
