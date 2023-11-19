import { vec3 } from "gl-matrix"

export class Vertex {
    co: vec3
    no: vec3
    constructor(x: number, y: number, z: number) {
        this.co = vec3.fromValues(x, y, z)
        this.no = vec3.create()
    }
}
