import { FaceVector } from "./FaceVector"
import { VertexVector } from "./VertexVector"
import { DirectoryList, FileType } from "./DirectoryList"
import { TargetEntry } from "./TargetEntry"
import { PoseEntry } from "./PoseEntry"
import { FileSystemAdapter } from "../filesystem/FileSystemAdapter"
import { StringToLine } from "../lib/StringToLine"

class TargetMap extends Map<string, TargetEntry> {}
class PoseMap extends Map<string, PoseEntry> {}

// animorph-0.3/src/Mesh.cpp
export class Mesh {
    // faces
    facevector = new FaceVector()

    // vertices
    vertexvector_morph = new VertexVector() // morphed mesh
    // vertexvector_morph_copy: VertexVector // copy of vertexvector_morph to reset vertexvector_morph and vertexvector_morph_only, used when animating/posing)
    // vertexvector_morph_only: VertexVector
    // vertexvector_orginal: vec3[]; // orginal mesh
    facegroup = new FaceGroup()

    targetmap = new TargetMap()
    posemap = new PoseMap()
    loadMeshFactory(meshFilename: string, facesFilename: string) {
        this.vertexvector_morph.load(meshFilename)
        this.facevector.loadGeometry(facesFilename)
    }
    loadGroupsFactory(groups_filename: string) {
        return this.facegroup.load(groups_filename)
    }
    loadTargetsFactory(targetRootPath: string, recursiveLevel = 1, preload = false, clearmap = true) {
        if (clearmap) {
            this.targetmap.clear()
        }

        // reading all the targets recursively
        const dir_list = new DirectoryList()
        dir_list.setRootPath(`data/${targetRootPath}`)
        dir_list.setRecursive(recursiveLevel)
        dir_list.setFileFilter(".target")

        const files = dir_list.getDirectoryList()
        for (const file of files) {
            const target_name = file.substring(targetRootPath.length + 1)
            const targetEntry = new TargetEntry(file, preload)
            this.targetmap.set(target_name, targetEntry)
        }
        console.log(`${preload ? "loaded" : "found"} ${files.length} morph targets from ${targetRootPath}/`)
    }
    loadPoseTargetsFactory(targetRootPath: string, recursiveLevel = 1) {
        this.posemap.clear()

        // reading all the targets recursively
        const dir_list = new DirectoryList()
        dir_list.setRootPath(`data/${targetRootPath}`)
        dir_list.setRecursive(recursiveLevel)
        dir_list.setFileType(FileType.DIRECTORY)

        const files = dir_list.getDirectoryList()
        let counter = 0
        for (const file of files) {
            const target_name = file.substring(targetRootPath.length + 1)
            if (target_name.indexOf("/") === -1) {
                continue
            }
            this.posemap.set(target_name, new PoseEntry(target_name, file, false))
            ++counter
        }
        console.log(`loaded ${counter} pose entries from ${targetRootPath}/`)
    }
    // loadCharactersFactory(charactersRootPath: string, recursiveLevel = 1) {
    //     throw Error("not implemented yet")
    // }
}

class FGroupData extends Array<number> {}
class VertexData extends Map<number, number> {}

class FGroup {
    visible!: boolean
    /// A vector of ints
    facesIndexes!: FGroupData
    facesIndexes_subd?: FGroupData ///subdivision
}

function isAlpha(ch: string){
    return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z"
}

class FaceGroup extends Map<string, FGroup> {
    private loaded: boolean = false
    // Maps FaceGroup identifiers via vertex group numbers to vertex indices
    private vertexes = new Map<string, VertexData>()
    load(filename: string): boolean {
        let fgroup_indent: string
        const content = FileSystemAdapter.readFile(`data/${filename}`)
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
