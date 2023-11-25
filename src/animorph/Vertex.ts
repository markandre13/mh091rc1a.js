import { vec3 } from "gl-matrix"

export class Vertex {
    co: vec3
    no: vec3
    constructor(x: number, y: number, z: number, nx = 0, ny = 0, nz = 0) {
        this.co = vec3.fromValues(x, y, z)
        this.no = vec3.fromValues(nx, ny, nz)
    }
}
