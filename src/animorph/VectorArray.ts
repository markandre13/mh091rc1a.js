import { vec3 } from "gl-matrix"

export class VectorArray extends Float32Array {
    getVec3(idx: number): vec3 {
        idx *= 3
        return vec3.fromValues(this[idx], this[idx + 1], this[idx + 2])
    }
    setVec3(idx: number, v: vec3) {
        this.set(v, idx * 3)
    }
}
