import { FileSystemAdapter } from "./filesystem/FileSystemAdapter"
import { NodeJSFSAdapter } from "./filesystem/NodeJSFSAdapter"
import { StringToLine } from "./lib/StringToLine"
import { vec3 } from "gl-matrix"

// animorph-0.3/src/Mesh.cpp
class Mesh {
    facevector = new FaceVector()
    vertexvector_morph = new VertexVector()

    loadMeshFactory(meshFilename: string, facesFilename: string) {
        this.vertexvector_morph.load(meshFilename)
        this.facevector.loadGeometry(facesFilename)
    }
}

class Vertex {
    co: vec3
    no: vec3
    constructor(x: number, y: number, z: number) {
        this.co = vec3.fromValues(x, y, z)
        this.no = vec3.create()
    }
}

class VertexVector extends Array<Vertex> {
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

class Face {
    vertices: number[]
    get size() {
        return this.vertices.length
    }
    material_index: number
    no: vec3

    constructor(v0: number, v1: number, v2: number, v3?: number) {
        if (v3 !== undefined) {
            this.vertices = [v0, v1, v2, v3]
        } else {
            this.vertices = [v0, v1, v2]
        }
        this.material_index = -1
        this.no = vec3.create()
    }
}

class FaceVector extends Array<Face> {
    loadGeometry(filename: string) {
        const data = FileSystemAdapter.readFile(`data/${filename}`)
        const reader = new StringToLine(data)
        let lineNumber = 0, triangles = 0, quads = 0
        for (let line of reader) {
            ++lineNumber
            line = line.trim()
            const tokens = line.split(/,+/)
            switch(tokens.length) {
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

// makehuman-0.9.1-rc1a/src/makehuman.cpp
function main() {
    console.log(`Makehuman 0.9.1-rc1a (JS Port)`)
    FileSystemAdapter.setInstance(new NodeJSFSAdapter())
    const mesh = new Mesh()
    mesh.loadMeshFactory("base.vertices", "base.faces")
}

main()
