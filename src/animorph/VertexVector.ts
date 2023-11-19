import { Vertex } from "./Vertex"
import { FileSystemAdapter } from "../filesystem/FileSystemAdapter"
import { StringToLine } from "../lib/StringToLine"

export class VertexVector extends Array<Vertex> {
    load(filename: string) {
        const data = FileSystemAdapter.readFile(`data/${filename}`)
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
}
