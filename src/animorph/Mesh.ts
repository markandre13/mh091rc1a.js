import { FaceVector } from "./FaceVector"
import { VertexVector } from "./VertexVector"
import { DirectoryList, FileType } from "./DirectoryList"
import { TargetEntry } from "./TargetEntry"
import { PoseEntry } from "./PoseEntry"

class TargetMap extends Map<string, TargetEntry> {}
class PoseMap extends Map<string, PoseEntry> {}

// animorph-0.3/src/Mesh.cpp
export class Mesh {
    facevector = new FaceVector()
    vertexvector_morph = new VertexVector()
    targetmap = new TargetMap()
    posemap = new PoseMap()
    loadMeshFactory(meshFilename: string, facesFilename: string) {
        this.vertexvector_morph.load(meshFilename)
        this.facevector.loadGeometry(facesFilename)
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
    loadCharactersFactory(charactersRootPath: string, recursiveLevel = 1) {
        throw Error("not implemented yet")
    }
}