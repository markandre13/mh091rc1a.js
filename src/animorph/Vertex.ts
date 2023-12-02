import { vec3 } from "gl-matrix"

export class Vertex {
    co: vec3
    constructor(x: number, y: number, z: number)
    constructor(vertex: Vertex)
    constructor(xOrVertex: number | Vertex, y?: number, z?: number) {
        if (xOrVertex instanceof Vertex) {
            this.co = vec3.clone(xOrVertex.co)
        } else {
            this.co = vec3.fromValues(xOrVertex, y!, z!)
        }
    }
}
