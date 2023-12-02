import { Vertex } from "./Vertex"
import { FileSystemAdapter } from "../filesystem/FileSystemAdapter"
import { StringToLine } from "../lib/StringToLine"

export class VertexVector extends Array<Vertex> {
    load(filename: string) {
        const data = FileSystemAdapter.readFile(filename)
        const reader = new StringToLine(data)
        let lineNumber = 0
        for (let line of reader) {
            ++lineNumber
            line = line.trim()
            const tokens = line.split(/,+/)
            if (tokens.length === 3) {
                this.push(new Vertex(parseFloat(tokens[0]), parseFloat(tokens[1]), parseFloat(tokens[2])))
            }
        }
        console.log(`loaded ${this.length} vertices from ${filename}`)
    }
    clone() {
        const clone = new VertexVector(this.length)
        for (let i = 0; i < this.length; ++i) {
            const v = this[i]
            clone[i] = new Vertex(v.co[0], v.co[1], v.co[2], v.no[0], v.no[1], v.no[2])
        }
        return clone
    }
    setFrom(src: VertexVector) {
        if (this.length !== src.length) {
            throw Error(`length must be the same`)
        }
        for (let i = 0; i < this.length; ++i) {
            const s = src[i]
            // prettier-ignore
            const d = this[i];
            // prettier-ignore
            [ d.co[0], d.co[1], d.co[2], d.no[0], d.no[1], d.no[2] ] = 
            [ s.co[0], s.co[1], s.co[2], s.no[0], s.no[1], s.no[2] ]
        }
    }
}
