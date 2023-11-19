import { vec3 } from "gl-matrix"
import { FileSystemAdapter } from "../filesystem/FileSystemAdapter"
import { StringToLine } from "../lib/StringToLine"
import { TargetData } from "./TargetData"
import { UnsortedUsedVertex } from "./UnsortedUsedVertex"

export class Target extends Array<TargetData> {
    private modVertex = new UnsortedUsedVertex()
    load(filename: string): boolean {
        const data = FileSystemAdapter.readFile(`${filename}`)
        const reader = new StringToLine(data)
        let lineNumber = 0
        for (let line of reader) {
            ++lineNumber
            line = line.trim()
            const tokens = line.split(/,+/)
            if (tokens.length === 4) {
                const td: TargetData = {
                    vertex_number: parseInt(tokens[0]),
                    morph_vector: vec3.fromValues(parseInt(tokens[0]), parseInt(tokens[1]), parseInt(tokens[2])),
                }
                this.push(td)
                this.modVertex.push(td.vertex_number)
            }
        }
        // console.log(`loaded ${this.length} vectors for morph target ${filename}`)
        return true
    }
    getModVertex() {
        return this.modVertex
    }
}
