import { vec3 } from "gl-matrix"

export class Face {
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
