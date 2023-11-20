import { FileSystemAdapter } from "../filesystem/FileSystemAdapter"
import { StringToLine } from "../lib/StringToLine"

class FGroupData extends Array<number> {}
export class VertexData extends Map<number, number> {}

export class FGroup {
    visible!: boolean
    /// A vector of ints
    facesIndexes!: FGroupData
    facesIndexes_subd?: FGroupData ///subdivision
}

export function isAlpha(ch: string){
    return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z"
}

export class FaceGroup extends Map<string, FGroup> {
    private loaded: boolean = false;
    // Maps FaceGroup identifiers via vertex group numbers to vertex indices
    private vertexes = new Map<string, VertexData>();
    load(filename: string): boolean {
        let fgroup_indent: string
        const content = FileSystemAdapter.readFile(filename)
        const reader = new StringToLine(content)
        let lineNumber = 0
        for (let line of reader) {
            if (isAlpha(line.charAt(0))) {
                fgroup_indent = line.split(",")[0].trim()
            } else {
                let data: FGroup = {
                    visible: true,
                    facesIndexes: line.split(" ").map(it => parseInt(it))
                }
                this.set(fgroup_indent!, data)
            }
        }

        console.log(`loaded ${this.size} face groups from ${filename}`)

        // there's some code for 'visibilities' but there ain't no ones in base.parts
        return true
    }
}
