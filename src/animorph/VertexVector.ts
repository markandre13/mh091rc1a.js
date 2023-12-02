import { Vertex } from "./Vertex"
import { FileSystemAdapter } from "../filesystem/FileSystemAdapter"
import { StringToLine } from "../lib/StringToLine"
import { vec3 } from "gl-matrix"

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
            clone[i] = new Vertex(v)
        }
        return clone
    }
    setFrom(src: VertexVector) {
        if (this.length !== src.length) {
            throw Error(`length must be the same`)
        }
        for (let i = 0; i < this.length; ++i) {
            vec3.copy(this[i].co, src[i].co)
        }
    }
}
